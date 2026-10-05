import { SiteContent } from '../../models/content.model';

export const en: SiteContent = {

  chatbotIcon: 'seco-centers/chatbot-icon.webp',

  languageName: 'English',

  nav: [
    { label: 'Home', url: '/'},
    { label: 'About', url: '/about'},
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

  signin:{
    seo:{
      title: '',
      description: ''
    }
  },

  

  home: {
    seo: {
      title: 'SECO Response',
      description: 'SECO GROUPE centers: registration, support and services.',
    },
    eyebrow: '',
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

  about: {
    seo: {
      title: 'About | SECO Response',
      description: 'SECO Response, a call center services provider.',
    },
    heroSection: {
      title: 'Your Partner for Reliable Business Support and Customer Solutions',
      description: 'Seco Response helps organizations simplify operations, strengthen customer relationships, and access reliable professional support.',
      heroImages: [
        '/seco-centers/about/about-1_500.webp', 
        '/seco-centers/about/about-2_500.webp', 
        '/seco-centers/about/about-3_500.webp']
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
      title: 'Page not found — SECO GROUPE Centers',
      description: 'This page does not exist or has been moved.',
    },
    code: '404',
    title: 'Page not found',
    lead: 'The page you are looking for does not exist or has been moved.',
    back: 'Back to home',
  },
};
