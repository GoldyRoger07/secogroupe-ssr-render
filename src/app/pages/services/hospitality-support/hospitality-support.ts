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
  selector: 'app-hospitality-support',
  imports: [Navbar, Footer, Container, V4Slider, AnimateOnScrollDirective, RouterLink],
  templateUrl: './hospitality-support.html',
  styleUrl: './hospitality-support.css',
})
export default class HospitalitySupport implements OnInit {
  private seo = inject(SeoService);

  hero = {
    eyebrow: 'Hospitality Services',
    title: 'Hospitality Support Services',
    subtitle:
      'Housekeeping and guest-ready support that elevates every stay and keeps your property performing at its best.',
    image: 'img/services/Hospitality Support/professional-hospitality-support-services.png',
    alt: 'Professional hospitality support team in a modern hotel, featuring a concierge, housekeeper, maintenance technician, banquet server, and bellman delivering high-quality hotel staffing and guest support services.'
  };

  gallery = [
    'img/services/Hospitality Support/01.jpg',
    'img/services/Hospitality Support/02.jpg',
    'img/services/compressed/housekeeping_services_1440.webp',
    'img/services/new/compressed/housekeeping_team_1440.webp',
    'v4/img/services/housekeeping.png',
  ];

  intro = {
    title: 'Guest experiences built on flawless support',
    paragraph1:
      'Hotels, resorts and hospitality venues live and die by the details. Our teams deliver the behind-the-scenes housekeeping and support that keeps rooms immaculate, public areas pristine and guests impressed.',
    paragraph2:
      'We scale with your occupancy and seasonality, providing trained hospitality staff who understand service standards and help you protect your reputation and reviews.',
  };

  offeringSubtitle =
    'End-to-end housekeeping and hospitality support tailored to hotels, resorts and venues.';

  subServices: Feature[] = [
    {
      title: 'Housekeeping Excellence',
      icon: 'ri-hotel-bed-line',
      description:
        'Guest rooms cleaned, refreshed and prepared to exacting standards for a flawless arrival every time.',
    },
    {
      title: 'Public Area Care',
      icon: 'ri-sparkling-line',
      description:
        'Lobbies, corridors, restaurants and amenities kept spotless and welcoming throughout the day.',
    },
    {
      title: 'Laundry & Linen',
      icon: 'ri-shirt-line',
      description:
        'Reliable handling of linens, towels and uniforms so fresh supplies are always on hand.',
    },
    {
      title: 'Turndown & Room Setup',
      icon: 'ri-service-line',
      description:
        'Attentive turndown, amenity replenishment and room presentation that delight your guests.',
    },
    {
      title: 'Health & Safety Focus',
      icon: 'ri-shield-cross-line',
      description:
        'Disinfection and sanitation practices that keep guests and staff safe and confident.',
    },
    {
      title: 'Flexible Seasonal Support',
      icon: 'ri-calendar-schedule-line',
      description:
        'Staffing that flexes with your occupancy so you are covered during every peak and event.',
    },
  ];

  benefits: Feature[] = [
    {
      title: 'Guest-First Mindset',
      icon: 'ri-emotion-happy-line',
      description: 'Teams trained to protect the guest experience and your reviews.',
    },
    {
      title: 'Consistent Standards',
      icon: 'ri-award-line',
      description: 'Supervised, repeatable quality across every room and every shift.',
    },
    {
      title: 'Scalable Teams',
      icon: 'ri-group-line',
      description: 'Ramp up for peak season and events without long-term overhead.',
    },
    {
      title: 'Reliable Coverage',
      icon: 'ri-time-line',
      description: 'Dependable staffing that keeps operations smooth around the clock.',
    },
  ];

  ctaImage = 'img/services/compressed/housekeeping1_1440.webp';

  ngOnInit(): void {
    this.seo.update({
      title: 'Hospitality Support & Hotel Housekeeping Services | SECO Groupe',
      description:
        'SECO Groupe hospitality support services: hotel and resort housekeeping, public area cleaning, laundry & linen, turndown and seasonal staffing to deliver flawless guest experiences and protect your reputation.',
      path: '/services/hospitality-support',
      image: 'img/services/Hospitality Support/01.jpg',
    });
  }
}
