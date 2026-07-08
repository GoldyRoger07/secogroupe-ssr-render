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
  selector: 'app-outdoor-care',
  imports: [Navbar, Footer, Container, V4Slider, AnimateOnScrollDirective, RouterLink],
  templateUrl: './outdoor-care.html',
  styleUrl: './outdoor-care.css',
})
export default class OutdoorCare implements OnInit {
  private seo = inject(SeoService);

  hero = {
    eyebrow: 'Grounds & Landscaping',
    title: 'Outdoor Care Services',
    subtitle:
      'Professional landscaping and grounds maintenance that keep the exterior of your property polished, safe and welcoming all year round.',
    image: 'img/services/new/gazon2.jpg',
    alt: 'SECO Groupe outdoor care crew mowing lawns and maintaining landscaped grounds as part of professional groundskeeping and exterior maintenance services.',
  };

  gallery = [
    'img/services/new/gazon2.jpg',
    'img/services/new/tonte-gazon-elagage-nettoyage.jpg',
    'img/services/new/gazon2.jpg',
  ];

  intro = {
    title: 'A first impression that starts outside',
    paragraph1:
      'Well-kept grounds set the tone before anyone steps through your door. Our outdoor care teams keep lawns, gardens and exterior spaces healthy, tidy and professional — from routine mowing to full seasonal landscaping programs.',
    paragraph2:
      'We tailor a schedule to your property and climate, handling everything from planting and pruning to seasonal cleanups and winter snow removal, so your exterior always reflects the quality of your organisation.',
  };

  offeringSubtitle =
    'Complete exterior maintenance — lawn care, landscaping, seasonal cleanups and winter services.';

  subServices: Feature[] = [
    {
      title: 'Lawn & Grounds Maintenance',
      icon: 'ri-scissors-line',
      description:
        'Regular mowing, edging, fertilising and weed control that keep your lawns lush, green and healthy.',
    },
    {
      title: 'Landscaping & Planting',
      icon: 'ri-plant-line',
      description:
        'Design, planting and upkeep of flower beds, shrubs and green spaces that enhance curb appeal.',
    },
    {
      title: 'Tree & Hedge Trimming',
      icon: 'ri-scissors-cut-line',
      description:
        'Pruning, trimming and shaping of trees and hedges to keep grounds safe, neat and well-groomed.',
    },
    {
      title: 'Seasonal Cleanups',
      icon: 'ri-leaf-line',
      description:
        'Spring and fall cleanups including leaf removal, debris clearing and bed preparation.',
    },
    {
      title: 'Snow & Ice Removal',
      icon: 'ri-snowy-line',
      description:
        'Reliable winter clearing of walkways, entrances and parking areas to keep your site accessible and safe.',
    },
    {
      title: 'Exterior Cleaning',
      icon: 'ri-water-flash-line',
      description:
        'Pressure washing and upkeep of walkways, entrances and outdoor surfaces for a polished finish.',
    },
  ];

  benefits: Feature[] = [
    {
      title: 'Year-Round Care',
      icon: 'ri-calendar-schedule-line',
      description: 'One partner covering every season, from summer mowing to winter snow removal.',
    },
    {
      title: 'Curb Appeal',
      icon: 'ri-award-line',
      description: 'Well-kept grounds that make a strong, professional first impression.',
    },
    {
      title: 'Equipped Teams',
      icon: 'ri-tools-line',
      description: 'Properly equipped crews delivering efficient, high-quality results safely.',
    },
    {
      title: 'Reliable Scheduling',
      icon: 'ri-time-line',
      description: 'Dependable, recurring service that fits around your operations and site.',
    },
  ];

  ctaImage = 'img/services/new/tonte-gazon-elagage-nettoyage.jpg';

  ngOnInit(): void {
    this.seo.update({
      title: 'Outdoor Care, Landscaping & Grounds Maintenance | SECO Groupe',
      description:
        'SECO Groupe outdoor care services: lawn and grounds maintenance, landscaping and planting, tree and hedge trimming, seasonal cleanups, snow and ice removal, and exterior cleaning to keep your property polished all year round.',
      path: '/services/outdoor-care',
      image: 'img/services/new/gazon2.jpg',
    });
  }
}
