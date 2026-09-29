import { LinkItem } from './link-item.model';

/**
 * Formes de contenu partagées par toutes les pages du site.
 * Une locale = un fichier dans `config/content/` qui implémente `SiteContent`.
 *
 * Les URLs sont écrites sans préfixe de langue ni base (`/`, `/register-now`) :
 * `LanguageService.localize()` les convertit en adresses réelles.
 */

export interface NavItem {
  label: string;
  url?: string;
  children?: LinkItem[];
}

export interface Seo {
  title: string;
  description: string;
}

/** Pages qui ont leur propre bloc `seo` (clé `data.seo` des routes). */
export type SeoPage = 'home' | 'notFound';

export interface SiteContent {
  /** Nom affiché de la langue, utilisé par le sélecteur (« Français », « English »). */
  languageName: string;

  chatbotIcon: string;

  nav: NavItem[];

  header: {
    skipToContent: string;
    mainNav: string;
    homeAria: string;
    openMenu: string;
    closeMenu: string;
    /** Libellé accessible du sélecteur de langue : « Langue ». */
    language: string;
    actions: {
      register: LinkItem;
      login: LinkItem;
    };
  };

  footer: {
    tagline: string;
    rights: string;
    contact: string;
  };

  home: {
    seo: Seo;
    eyebrow: string;
    title: string;
    lead: string;
    primaryCta: LinkItem;
    secondaryCta: LinkItem;
    heroEndBar:{icon: string, title: string, desc: string}[]
    section2:{
      title: string,
      cards: {
        icon: string;
        cover: string;
        title: string;
        desc: string;
      }[]
    }
  };

  notFound: {
    seo: Seo;
    code: string;
    title: string;
    lead: string;
    back: string;
  };
}
