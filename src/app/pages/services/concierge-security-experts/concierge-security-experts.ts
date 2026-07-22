import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../../components/navbar/navbar';
import { Footer } from '../../../components/footer/footer';
import { Container } from '../../../components/container/container';
import { V4Slider } from '../../../components/v4/v4-slider/v4-slider';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll';
import { SeoService } from '../../../services/seo-service';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-concierge-security-experts',
  imports: [Navbar, Footer, Container, V4Slider, AnimateOnScrollDirective, RouterLink],
  templateUrl: './concierge-security-experts.html',
  styleUrl: './concierge-security-experts.css',
})
export default class ConciergeSecurityExperts implements OnInit {
  private seo = inject(SeoService);

  hero = {
    eyebrow: 'Security & Concierge',
    title: 'Security & Concierge Experts',
    subtitle:
      'One trusted partner combining a welcoming concierge presence with professional protection for your people, assets and property.',
    image: 'img/services/compressed/bg_seco_securite_1440.webp',
    alt: 'SECO Groupe licensed security guard and concierge providing integrated protection, access control and front-desk services at a corporate property.',
  };

  gallery = [
    'img/services/compressed/concierge_1440.webp',
    'img/services/compressed/security_guard_female_1440.webp',
    'img/services/Security & Concierge/01.jpg',
    'img/services/Security & Concierge/03.jpg',
    'img/services/compressed/seco_agent_securite_en_bleu.webp',
  ];

  intro = {
    title: 'Hospitality and Protection, together',
    paragraph1:
      'The front of your building has two jobs at once: to welcome the people who belong there and to keep everyone else out. Our integrated concierge and security teams do both — combining a polished, hospitable presence with vigilant, licensed protection.',
    paragraph2:
      'From front-desk operations and visitor management to guarding, patrols and surveillance, we deliver a single, coordinated solution tailored to residential, corporate and luxury properties.',
  };

  offeringSubtitle =
    'A blended concierge and security program that protects your property without compromising its welcome.';

  subServices: Feature[] = [
    {
      title: 'Welcoming Front Desk',
      icon: 'ri-emotion-happy-line',
      description:
        'Polished, friendly concierge personnel who serve as the professional, welcoming face of your building.',
    },
    {
      title: 'Access & Visitor Control',
      icon: 'ri-shield-user-line',
      description:
        'Visitor registration, credential checks and controlled entry that keep your property secure and welcoming at once.',
    },
    {
      title: '24/7 Protection',
      icon: 'ri-time-line',
      description:
        'Trained and licensed security guards for static guarding, mobile patrols and around-the-clock coverage.',
    },
    {
      title: 'Surveillance & CCTV',
      icon: 'ri-camera-line',
      description:
        'Advanced security technology including CCTV, alarm monitoring and state-of-the-art access systems.',
    },
    {
      title: 'Concierge Services',
      icon: 'ri-customer-service-2-line',
      description:
        'Package handling, amenity bookings and resident assistance managed from one central, reliable hub.',
    },
    {
      title: 'Emergency Response',
      icon: 'ri-alarm-warning-line',
      description:
        'Professional handling of security incidents and emergencies with immediate, coordinated response.',
    },
  ];

  benefits: Feature[] = [
    {
      title: 'One Integrated Team',
      icon: 'ri-links-line',
      description: 'Concierge and security under a single contract for seamless coordination.',
    },
    {
      title: 'Licensed & Vetted',
      icon: 'ri-shield-star-line',
      description: 'Certified, background-checked professionals trained for your environment.',
    },
    {
      title: 'Technology-Enabled',
      icon: 'ri-cctv-line',
      description: 'Human presence backed by surveillance and monitoring for full coverage.',
    },
    {
      title: 'Tailored Coverage',
      icon: 'ri-settings-4-line',
      description: 'Programs shaped around your property type, risks and hours of operation.',
    },
  ];

  ctaImage = 'img/services/compressed/bg_seco_securite_1440.webp';

  ngOnInit(): void {
    this.seo.update({
      title: 'Concierge & Security Services | SECO Groupe',
      description:
        'SECO Groupe integrated concierge and security services: welcoming front-desk and visitor management combined with licensed guards, mobile patrols, CCTV surveillance, access control and emergency response for residential, corporate and luxury properties.',
      path: '/services/concierge-security-experts',
      image: 'img/services/compressed/bg_seco_securite_1440.webp',
    });
  }
}
