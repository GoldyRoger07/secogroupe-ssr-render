import { SiteContent } from '../../models/content.model';

export const ht: SiteContent = {
  chatbotIcon: 'seco-centers/chatbot-icon.webp',
  languageName: 'Kreyol',

  nav: [
    { label: 'Akey', url: '/'},
    { label: 'A Propo', url: '/'},
    { label: 'FAQ', url: '/'},
    { label: 'Sevis', url: '/'}

  ],

  header: {
    skipToContent: 'Skip to main content',
    mainNav: 'Main navigation',
    homeAria: 'SECO Response — home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    actions: {
      register: { label: 'Enskri', url: '/register-now' },
      login: { label: 'Konekte', url: '/login' },
    },
  },

  footer: {
    tagline: 'A network of centers serving our teams and our clients.',
    rights: 'All rights reserved.',
    contact: 'Contact us',
  },

  

  home: {
    seo: {
      title: 'SECO Response',
      description: 'SECO GROUPE centers: registration, support and services.',
    },
    eyebrow: 'SECO GROUPE',
    title: 'Byenvini nan SECO Response',
    lead: 'Our innovative technology empowers you to schedule work around your life, not the other way around. If you’re looking for choice, flexibility and freedom, register with us today.',
    primaryCta: { label: 'Komanse Kounya', url: '/register-now' },
    secondaryCta: { label: 'Find The Right Fit', url: '/login' },
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
      }
    ],
    section2:{
      title: 'Find the work that fits your experience',
      cards: []
    }
  },

  notFound: {
    seo: {
      title: 'Page not found — SECO GROUPE Centers',
      description: 'This page does not exist or has been moved.',
    },
    code: '404',
    title: 'Page not found',
    lead: 'The page you are looking for does not exist or has been moved.',
    back: 'Back to home',
  },
};
