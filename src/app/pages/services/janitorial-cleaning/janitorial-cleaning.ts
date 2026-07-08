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
  selector: 'app-janitorial-cleaning',
  imports: [Navbar, Footer, Container, V4Slider, AnimateOnScrollDirective, RouterLink],
  templateUrl: './janitorial-cleaning.html',
  styleUrl: './janitorial-cleaning.css',
})
export default class JanitorialCleaning implements OnInit {
  private seo = inject(SeoService);

  hero = {
    eyebrow: 'Facility Services',
    title: 'Janitorial & Cleaning Services',
    subtitle:
      'Beyond simply cleaning, we deliver healthy, productive and welcoming environments for your employees, clients and visitors.',
    image: 'img/services/Janitorial & Cleaning/commercial-janitorial-cleaning-services.png',
    alt: 'Professional janitorial and cleaning services team cleaning a modern commercial building, including floor mopping, window cleaning, surface sanitization, and facility maintenance with commercial-grade equipment.'
  };

  gallery = [
    'img/services/Janitorial & Cleaning/01.jpg',
    'img/services/Janitorial & Cleaning/02.jpg',
    'img/services/Janitorial & Cleaning/03.jpg',
    'img/services/new/compressed/janitorial_cleaning_1440.webp',
    'v4/img/services/janitorial.png',
  ];

  intro = {
    title: 'Spotless, safe and healthy spaces',
    paragraph1:
      'Our commercial janitorial teams keep offices, retail spaces, industrial sites and healthcare facilities clean, sanitary and presentable. We build a cleaning program around your schedule and standards — daily, nightly or fully customised.',
    paragraph2:
      'Using industry-leading practices and eco-friendly products, we reduce the spread of germs, protect your assets and help you make a lasting first impression on everyone who walks through your doors.',
  };

  offeringSubtitle =
    'A complete commercial cleaning program covering every surface, floor and touchpoint in your facility.';

  subServices: Feature[] = [
    {
      title: 'Pristine Environments',
      icon: 'ri-sparkling-line',
      description:
        "Daily, weekly or custom cleaning schedules tailored to your facility's needs — from offices and commercial spaces to industrial sites.",
    },
    {
      title: 'Health & Safety Focus',
      icon: 'ri-shield-cross-line',
      description:
        'Industry-leading practices and eco-friendly products that promote a sterile environment and reduce the spread of germs.',
    },
    {
      title: 'Floor & Carpet Care',
      icon: 'ri-brush-4-line',
      description:
        'Stripping, waxing, buffing, carpet extraction and hard-floor restoration to keep every surface looking its best.',
    },
    {
      title: 'Window & Glass Cleaning',
      icon: 'ri-window-line',
      description:
        'Streak-free interior and exterior glass, partitions and entrances that keep your premises bright and welcoming.',
    },
    {
      title: 'Disinfection & Sanitising',
      icon: 'ri-drop-line',
      description:
        'Targeted disinfection of high-touch points and restrooms to support a healthier workplace for staff and guests.',
    },
    {
      title: 'Waste Management',
      icon: 'ri-recycle-line',
      description:
        'Reliable waste collection, recycling and disposal that keeps your site tidy, compliant and clutter-free.',
    },
  ];

  benefits: Feature[] = [
    {
      title: 'Trained & Vetted Teams',
      icon: 'ri-team-line',
      description: 'Background-checked, professionally trained cleaners you can trust on your premises.',
    },
    {
      title: 'Quality Assurance',
      icon: 'ri-award-line',
      description: 'Rigorous supervision and inspections that guarantee consistent, high-quality results.',
    },
    {
      title: 'Eco-Friendly Products',
      icon: 'ri-leaf-line',
      description: 'Green cleaning solutions that are safe for people, surfaces and the environment.',
    },
    {
      title: 'Flexible Scheduling',
      icon: 'ri-time-line',
      description: 'Day, night or weekend service that fits around your operations with zero disruption.',
    },
  ];

  ctaImage = 'img/services/new/compressed/janitorial_1440.webp';

  ngOnInit(): void {
    this.seo.update({
      title: 'Janitorial & Commercial Cleaning Services | SECO Groupe',
      description:
        'Professional janitorial and commercial cleaning services by SECO Groupe: office cleaning, floor & carpet care, window cleaning, disinfection, eco-friendly products and waste management for a healthy, spotless facility.',
      path: '/services/janitorial-cleaning',
      image: 'img/services/Janitorial & Cleaning/01.jpg',
    });
  }
}
