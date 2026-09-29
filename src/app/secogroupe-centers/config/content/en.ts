import { SiteContent } from '../../models/content.model';

export const en: SiteContent = {

  chatbotIcon: 'seco-centers/chatbot-icon.webp',

  languageName: 'English',

  nav: [
    { label: 'Home', url: '/'},
    { label: 'About', url: '/'},
    { label: 'FAQ', url: '/'},
    { label: 'Services', url: '/'}

  ],

  header: {
    skipToContent: 'Skip to main content',
    mainNav: 'Main navigation',
    homeAria: 'SECO GROUPE Centers — home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    actions: {
      register: { label: 'Sign up', url: '/register-now' },
      login: { label: 'Log in', url: '/login' },
    },
  },

  footer: {
    tagline: 'A network of centers serving our teams and our clients.',
    rights: 'All rights reserved.',
    contact: 'Contact us',
  },

  

  home: {
    seo: {
      title: 'SECO GROUPE Centers',
      description: 'SECO GROUPE centers: registration, support and services.',
    },
    eyebrow: 'SECO GROUPE',
    title: 'Welcome to SECO Response',
    lead: 'Our innovative technology empowers you to schedule work around your life, not the other way around. If you’re looking for choice, flexibility and freedom, register with us today.',
    primaryCta: { label: 'Get Started', url: '/register-now' },
    secondaryCta: { label: 'Find The Right Fit', url: '/login' },
    heroEndBar:[
      {
        icon: 'ri-headphone-fill',
        title: 'Professional Team',
        desc: 'Trained and dedicated agents on site.'
      },
      {
        icon: 'ri-headphone-fill',
        title: 'Scalable Solutions',
        desc: 'Support that grows with your business.'
      },
      {
        icon: 'ri-shield-user-fill',
        title: 'Quality & Security',
        desc: 'Reliable, secure and compliant.'
      },
      {
        icon: 'ri-focus-2-line',
        title: 'Customer Focused',
        desc: 'Real people delivering real results.'
      },
    ],
    section2:{
      title: 'Customer service outsourcing solutions we offer',
      cards: [
        {
          icon: 'ri-headphone-fill',
          cover: '/seco-centers/home/agent-1.webp',
          title: 'Customer Support',
          desc: 'Inbound, outbound, chat, email, escalation, and retention roles across every channel'
        },
        {
          icon: 'ri-headphone-fill',
          cover: '/seco-centers/home/agent-2.webp',
          title: 'Technical Support',
          desc: 'Tier 1 and Tier 2 troubleshooting, help desk, and remote assistance.'
        },
        {
          icon: 'ri-headphone-fill',
          cover: '/seco-centers/home/agent-3.webp',
          title: 'Bilingual & Language Services',
          desc: 'Interpretation, translation, and multilingual support roles.'
        },
        {
          icon: 'ri-headphone-fill',
          cover: '/seco-centers/home/agent-4.webp',
          title: 'Sales & Outreach',
          desc: 'Telesales, lead generation, appointment setting, and retention sales.'
        },
      ]
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
