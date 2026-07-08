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
  selector: 'app-building-maintenance',
  imports: [Navbar, Footer, Container, V4Slider, AnimateOnScrollDirective, RouterLink],
  templateUrl: './building-maintenance.html',
  styleUrl: './building-maintenance.css',
})
export default class BuildingMaintenance implements OnInit {
  private seo = inject(SeoService);

  hero = {
    eyebrow: 'Facility Services',
    title: 'Building Maintenance Services',
    subtitle:
      'Protecting your investment with proactive, expert maintenance that keeps your infrastructure running smoothly and efficiently.',
    image: 'img/services/Building Maintenance/01.jpg',
  };

  gallery = [
    'img/services/Building Maintenance/01.jpg',
    'img/services/Building Maintenance/02.jpg',
    'img/services/new/compressed/building_maintenance_1440.webp',
    'img/services/new/compressed/construction_worker_and_maintenance_1440.webp',
    'img/services/new/compressed/seco_tech_maintenance_elevator_1440.webp',
  ];

  intro = {
    title: 'Keep your building running at its best',
    paragraph1:
      'A well-maintained facility protects your investment, extends the life of your equipment and keeps occupants safe and comfortable. Our technicians combine preventative maintenance with responsive repairs to minimise downtime and unexpected costs.',
    paragraph2:
      'From HVAC and electrical systems to carpentry, plumbing and general handyman work, we act as a single, reliable partner for the ongoing upkeep of your property.',
  };

  offeringSubtitle =
    'Comprehensive upkeep for every system in your building — planned, preventative and on-demand.';

  subServices: Feature[] = [
    {
      title: 'Preventative Maintenance',
      icon: 'ri-settings-3-line',
      description:
        'Regular inspections and servicing of essential building systems to minimise unexpected breakdowns and costly repairs.',
    },
    {
      title: 'General Repairs',
      icon: 'ri-hammer-line',
      description:
        'Skilled handyman services including minor plumbing, electrical, carpentry, drywall and painting.',
    },
    {
      title: 'HVAC & Equipment Oversight',
      icon: 'ri-temp-hot-line',
      description:
        'Coordination and maintenance checks for heating, ventilation, air conditioning and other critical facility equipment.',
    },
    {
      title: 'Electrical & Lighting',
      icon: 'ri-flashlight-line',
      description:
        'Safe upkeep and fault-finding for lighting, fixtures and electrical systems throughout your premises.',
    },
    {
      title: 'Plumbing & Sanitary',
      icon: 'ri-drop-line',
      description:
        'Prompt attention to leaks, fittings and sanitary systems to prevent damage and keep facilities operational.',
    },
    {
      title: 'Groundskeeping',
      icon: 'ri-leaf-line',
      description:
        'Keeping the exterior professional and well-maintained so your property makes the right impression.',
    },
  ];

  benefits: Feature[] = [
    {
      title: 'Rapid Response',
      icon: 'ri-timer-flash-line',
      description: 'Fast, dependable call-outs that reduce downtime and get issues resolved quickly.',
    },
    {
      title: 'Skilled Technicians',
      icon: 'ri-tools-line',
      description: 'Certified, multi-trade professionals capable of handling a wide range of tasks.',
    },
    {
      title: 'Single Point of Contact',
      icon: 'ri-links-line',
      description: 'One trusted partner for all your maintenance needs — no juggling multiple vendors.',
    },
    {
      title: 'Preventative Focus',
      icon: 'ri-shield-check-line',
      description: 'Planned programs that catch small issues before they become expensive problems.',
    },
  ];

  ctaImage = 'img/services/new/compressed/facility_management_1440.webp';

  ngOnInit(): void {
    this.seo.update({
      title: 'Building Maintenance & Facility Repair Services | SECO Groupe',
      description:
        'SECO Groupe building maintenance services: preventative maintenance, HVAC oversight, electrical, plumbing, general repairs and handyman services to keep your facility safe, efficient and running smoothly.',
      path: '/services/building-maintenance',
      image: 'img/services/Building Maintenance/01.jpg',
    });
  }
}
