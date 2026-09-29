import { SiteContent } from '../../models/content.model';

export const fr: SiteContent = {
  chatbotIcon: 'seco-centers/chatbot-icon.webp',
  languageName: 'Français',

  nav: [
    { label: 'Accueil', url: '/'},
    { label: 'A propos', url: '/'},
    { label: 'FAQ', url: '/'},
    { label: 'Services', url: '/'}

  ],

  header: {
    skipToContent: 'Aller au contenu principal',
    mainNav: 'Navigation principale',
    homeAria: 'SECO GROUPE Centers — accueil',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    language: 'Langue',
    actions: {
      register: { label: "S'inscrire", url: '/register-now' },
      login: { label: 'Se connecter', url: '/login' },
    },
  },

  footer: {
    tagline: 'Un réseau de centres au service de nos équipes et de nos clients.',
    rights: 'Tous droits réservés.',
    contact: 'Nous contacter',
  },

  home: {
    seo: {
      title: 'SECO GROUPE Centers',
      description: 'Les centres SECO GROUPE : inscription, accompagnement et services.',
    },
    eyebrow: 'SECO GROUPE',
    title: 'Bienvenue dans les centres SECO GROUPE',
    lead: 'Inscrivez-vous en quelques minutes ou connectez-vous à votre espace pour suivre votre parcours.',
    primaryCta: { label: "S'inscrire maintenant", url: '/register-now' },
    secondaryCta: { label: 'Se connecter', url: '/login' },
    heroEndBar:[
      {
        icon: 'icon',
        title: 'Professional Team',
        desc: 'Trained and dedicated agents on site.'
      },
      {
        icon: 'icon',
        title: 'Scalable Solutions',
        desc: 'Support that grows with your business.'
      },
      {
        icon: 'icon',
        title: 'Quality & Security',
        desc: 'Reliable, secure and compliant.'
      },
      {
        icon: 'icon',
        title: 'Customer Focused',
        desc: 'Real people delivering real results.'
      },
    ],
    section2:{
      title: 'Find the work that fits your experience',
      cards: []
    }
  },

  notFound: {
    seo: {
      title: 'Page introuvable — SECO GROUPE Centers',
      description: "Cette page n'existe pas ou a été déplacée.",
    },
    code: '404',
    title: 'Page introuvable',
    lead: "La page que vous cherchez n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
};
