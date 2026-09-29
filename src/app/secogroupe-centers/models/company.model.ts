/** Données de marque indépendantes de la langue (les textes traduits vivent dans `config/content/`). */
export interface Company {
  name: string;
  legalName: string;
  logo: Logo;
  contact: Contact;
}

export interface Logo {
  light: string;
  dark: string;
}

export interface Contact {
  email: string;
  phone: string;
  address: string;
}
