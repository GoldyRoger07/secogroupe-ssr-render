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
  selector: 'app-staffing-solutions',
  imports: [Navbar, Footer, Container, V4Slider, AnimateOnScrollDirective, RouterLink],
  templateUrl: './staffing-solutions.html',
  styleUrl: './staffing-solutions.css',
})
export default class StaffingSolutions implements OnInit {
  private seo = inject(SeoService);

  hero = {
    eyebrow: 'Workforce Solutions',
    title: 'Staffing Solutions',
    subtitle:
      'When you need specialised help fast, we provide vetted, trained and reliable personnel to fill essential roles within your facility or organisation.',
    image: 'img/services/Staffing Solutions/01.jpg',
    alt: 'SECO Groupe staffing solutions team of vetted, trained professionals ready for temporary, temp-to-hire and direct placement across facility, hospitality and security roles.',
  };

  gallery = [
    'img/services/Staffing Solutions/01.jpg',
    'img/services/Staffing Solutions/02.jpg',
    'img/services/new/compressed/staffing_1440.webp',
    'img/services/new/compressed/facility_management_1_1440.webp',
    'img/services/new/compressed/meeting_with_partener_or_client_1440.webp',
  ];

  intro = {
    title: 'The right people, right when you need them',
    paragraph1:
      'Our staffing division takes the pressure off your operations by sourcing, screening and placing dependable personnel across all of our core service areas. Whether you need to cover a seasonal peak, a sudden absence or an ongoing role, we deliver candidates who are ready to work.',
    paragraph2:
      'We handle recruitment, background checks and initial training so you receive vetted professionals who integrate seamlessly into your team and uphold your standards from day one.',
  };

  offeringSubtitle =
    'Flexible, fully managed staffing for janitorial, maintenance, security, concierge and hospitality roles.';

  subServices: Feature[] = [
    {
      title: 'Flexible Staffing',
      icon: 'ri-exchange-line',
      description:
        'Temporary, temp-to-hire and direct placement services to meet fluctuating and seasonal demand.',
    },
    {
      title: 'Vetted Professionals',
      icon: 'ri-user-follow-line',
      description:
        'We handle recruitment, screening, background checks and initial training to ensure high-quality candidates.',
    },
    {
      title: 'Core Service Roles',
      icon: 'ri-focus-2-line',
      description:
        'Staff for all of our specialties — janitorial, maintenance, security, concierge and hospitality.',
    },
    {
      title: 'Rapid Deployment',
      icon: 'ri-timer-flash-line',
      description:
        'A ready pool of pre-screened talent means we can fill urgent roles quickly and reliably.',
    },
    {
      title: 'Payroll & Compliance',
      icon: 'ri-file-list-3-line',
      description:
        'We manage payroll, scheduling and compliance so you can focus on running your operation.',
    },
    {
      title: 'Ongoing Supervision',
      icon: 'ri-user-star-line',
      description:
        'Active management and quality checks keep placed staff performing to your expectations.',
    },
  ];

  benefits: Feature[] = [
    {
      title: 'Fast Turnaround',
      icon: 'ri-flashlight-line',
      description: 'A vetted talent pool ready to deploy so you never miss a beat.',
    },
    {
      title: 'Reduced Risk',
      icon: 'ri-shield-check-line',
      description: 'Thorough screening and compliance handling protect your business and reputation.',
    },
    {
      title: 'Scalable Workforce',
      icon: 'ri-line-chart-line',
      description: 'Scale up or down with demand without the overhead of permanent hiring.',
    },
    {
      title: 'Trained Personnel',
      icon: 'ri-graduation-cap-line',
      description: 'Candidates arrive prepared, professional and ready to represent your brand.',
    },
  ];

  ctaImage = 'img/services/new/compressed/staffing_1440.webp';

  ngOnInit(): void {
    this.seo.update({
      title: 'Staffing Solutions & Workforce Services | SECO Groupe',
      description:
        'SECO Groupe staffing solutions: temporary, temp-to-hire and direct placement of vetted, trained personnel for janitorial, maintenance, security, concierge and hospitality roles — with recruitment, screening and payroll handled for you.',
      path: '/services/staffing-solutions',
      image: 'img/services/Staffing Solutions/01.jpg',
    });
  }
}
