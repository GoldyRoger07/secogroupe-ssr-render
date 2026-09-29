import { Component, computed, DestroyRef, effect, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { LanguageService } from '../services/language.service';
import { SeoService } from '../services/seo.service';

/** Coquille commune à toutes les pages du projet : header, contenu, footer, SEO. */
@Component({
  selector: 'cc-layout',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './secogroupe-centers-layout.html',
  styleUrl: './secogroupe-centers-layout.css',
})
export class SecogroupeCentersLayout {
  private readonly language = inject(LanguageService);
  protected readonly content = computed(() => this.language.content().chatbotIcon);
  private readonly seo = inject(SeoService);
  private readonly route = inject(ActivatedRoute);

  constructor() {
    this.seo.setPageFrom(this.route.snapshot);
    inject(Router)
      .events.pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.seo.setPageFrom(this.route.snapshot));

    effect(() => this.seo.apply());

    // En quittant le projet, le reste du site retrouve sa langue et ses balises.
    inject(DestroyRef).onDestroy(() => {
      this.seo.clear();
      this.language.restoreHostLanguage();
    });
  }
}
