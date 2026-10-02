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

  about: {
    seo: {
      title: 'About | SECO Response',
      description: 'SECO Response, a call center services provider.',
    },
    heroSection: {
      title: 'Your Partner for Reliable Business Support and Customer Solutions',
      description: 'Seco Response helps organizations simplify operations, strengthen customer relationships, and access reliable professional support.',
      heroImages: [
        '/secogroupe-centers/about/about-1.webp', 
        '/secogroupe-centers/about/about-2.webp', 
        '/secogroupe-centers/about/about-3.webp']
    },
    section2: {
      p1: 'We provide flexible business solutions designed to meet the evolving needs of companies, organizations, and entrepreneurs. Our services span customer support, virtual assistance, administrative services, multilingual communication, technical support, business process outsourcing, and specialized operational assistance. By combining skilled professionals with efficient processes and modern technology, we help our clients save time, improve productivity, and deliver better experiences.',
      p2: 'We work with businesses and organizations across industries, including healthcare, financial services, government, legal, retail, education, e-commerce, and professional services.',
      p3: 'At Seco Response, we focus on more than simply completing tasks. We aim to become a dependable extension of your team. Our commitment to quality, professionalism, confidentiality, responsiveness, and accountability allows our clients to focus on what they do best while we help manage the support behind the scenes.'
    },
    section3: {
      title: 'Why Seco Response ?',
      cards: [
        {
          icon: 'check',
          title: 'Reliable Support',
          desc: 'Professional teams you can depend on.'
        },
        {
          icon: 'check',
          title:'Flexible Solutions',
          desc: 'Services that can adapt as your organization grows.'
        },
        {
          icon: 'check',
          title: 'People & Technology',
          desc: 'The right combination of human expertise and modern tools.'
        },
        {
          icon: 'check',
          title: 'Quality & Accountability',
          desc: 'Consistent service with a strong focus on client satisfaction.'
        },
        {
          icon: 'check',
          title: 'Business-Focused',
          desc: 'Practical solutions designed to improve efficiency and support growth.'
        }
      ]
    },
    section4: {
      title: 'Our Mission',
      desc1: 'To provide dependable, innovative, and accessible business support solutions that help organizations operate more efficiently, serve their customers better, and achieve sustainable growth.',
      desc2: 'Seco Response builds a reusable, searchable pool of call-center and business-support talent, and refers qualified, consenting candidates to partner agencies when projects become available. We are not the employer of record for referred candidates - our partner agencies conduct interviews and make all hiring, offer, and compensation decisions.',
      cta: {
        content: 'Join Our Network',
        link: ''
      },
      desc3: 'Seco Response - Supporting Your Business. Empowering Your Growth.'
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
