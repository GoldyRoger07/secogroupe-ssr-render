import { computed, inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot } from '@angular/router';
import { SeoPage } from '../models/content.model';
import { LanguageService } from './language.service';

/**
 * Titre, description et `og:locale` du projet, dans la langue courante.
 * Chaque route désigne le bloc de contenu de sa page avec `data: { seo: 'home' }` : aucune configuration
 * n'est demandée à l'application hôte (pas de `TitleStrategy` globale).
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly language = inject(LanguageService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  private readonly page = signal<SeoPage>('home');

  readonly seo = computed(() => this.language.content()[this.page()].seo);

  /** Lit la page déclarée par la route la plus profonde. */
  setPageFrom(snapshot: ActivatedRouteSnapshot): void {
    let route = snapshot;
    while (route.firstChild) {
      route = route.firstChild;
    }
    this.page.set(route.data['seo'] ?? 'home');
  }

  /** Écrit les balises ; à appeler dans un `effect` pour suivre page et langue. */
  apply(): void {
    const { title, description } = this.seo();
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:locale', content: this.language.ogLocale() });
  }

  /** Retire les balises propres au projet en le quittant. */
  clear(): void {
    this.meta.removeTag('property="og:locale"');
  }
}
