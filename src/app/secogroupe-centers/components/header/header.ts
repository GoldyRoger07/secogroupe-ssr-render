import { Component, HostListener, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';
import { Container } from '../container/container';
import { CATALOG, LanguageService, Locale } from '../../services/language.service';
import { CompanyService } from '../../services/company.service';
import { Dropdown } from '../dropdown/dropdown';

@Component({
  selector: 'cc-header',
  imports: [Container, Dropdown, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly router = inject(Router);

  protected readonly language = inject(LanguageService);
  protected readonly company = inject(CompanyService).company;
  protected readonly content = computed(() => this.language.content().header);

  /** Liens du menu, déjà convertis en adresses de la langue courante. */
  protected readonly navItems = computed(() =>
    this.language.content().nav.map((item) => ({
      ...item,
      url: item.url && this.language.localize(item.url),
      children: item.children?.map((child) => ({
        ...child,
        url: this.language.localize(child.url),
      })),
    })),
  );

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      // Chemin seul : requête et ancre ne se transmettent pas via `routerLink`.
      map((event) => event.urlAfterRedirects.split(/[?#]/)[0]),
    ),
    { initialValue: this.router.url.split(/[?#]/)[0] },
  );

  /** Options du sélecteur, chaque langue étant nommée dans sa propre langue (« English », « Français »). */
  protected readonly languages = (Object.keys(CATALOG) as Locale[]).map((code) => ({
    code,
    name: CATALOG[code].languageName,
  }));

  /** Ouvre la page courante dans la langue choisie. */
  protected changeLanguage(event: Event): void {
    const locale = (event.target as HTMLSelectElement).value as Locale;
    if (locale === this.language.language()) {
      console.log(`this.language.language() = ${this.language.language()}`)
      console.log(`locale = ${locale}`)
      return;
    }
    this.router.navigateByUrl(this.language.translateUrl(this.currentUrl(), locale));
  }

  protected readonly menuOpen = signal(false);
  /** Sous-menu mobile actuellement déplié. */
  protected readonly openSection = signal<string | null>(null);
  /** Masque le header au scroll vers le bas. */
  protected readonly hidden = signal(false);
  /** Passe le header en fond opaque dès qu'on quitte le haut de page. */
  protected readonly scrolled = signal(false);

  private lastScrollY = 0;

  constructor() {
    // Un changement de route doit refermer le menu mobile.
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.closeMenu());
  }

  @HostListener('window:scroll')
  protected onScroll(): void {
    if (!this.isBrowser) {
      return;
    }

    const current = window.scrollY;
    this.scrolled.set(current > 12);

    // Le header reste visible tant que le menu mobile est ouvert.
    if (this.menuOpen()) {
      this.lastScrollY = current;
      return;
    }

    if (current > this.lastScrollY && current > 120) {
      this.hidden.set(true);
    } else if (current < this.lastScrollY) {
      this.hidden.set(false);
    }

    this.lastScrollY = current;
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeMenu();
  }

  /**
   * `href="#contenu"` seul viserait `/#contenu` (à cause de `<base href="/">`) et quitterait le projet :
   * on place directement le focus sur le contenu.
   */
  protected skipToContent(event: Event): void {
    event.preventDefault();
    const main = document.getElementById('contenu');
    main?.focus();
    main?.scrollIntoView();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    this.lockScroll(this.menuOpen());
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
    this.openSection.set(null);
    this.lockScroll(false);
  }

  protected toggleSection(label: string): void {
    this.openSection.update((current) => (current === label ? null : label));
  }

  /** Empêche la page de défiler derrière l'overlay mobile. */
  private lockScroll(locked: boolean): void {
    if (this.isBrowser) {
      document.body.style.overflow = locked ? 'hidden' : '';
    }
  }
}
