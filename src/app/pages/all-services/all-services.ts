import { Component, inject, OnInit } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { SeoService } from '../../services/seo-service';
import { Container } from '../../components/container/container';
import { Footer } from '../../components/footer/footer';
import { TranslatePipe } from '@ngx-translate/core';
import { HeroSection } from "../../components/hero-section/hero-section";
import { MySlider } from "../../components/my-slider/my-slider";
import { PaperDesignSection } from '../../components/paper-design-section/paper-design-section';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll';
import { V4Slider } from '../../components/v4/v4-slider/v4-slider';
import { InfiniteHorizontalScroll } from '../../components/infinite-horizontal-scroll/infinite-horizontal-scroll';
import { CardServices } from "../../components/card-services/card-services";

interface ServiceSection{
  title: string;
  icon?: string;
  color?: string;
  description: string;
  imageUrl: string[];
  subServices: SubService[];
}

interface SubService{
  title: string;
  description: string;
  icon?: string;
}

@Component({
  selector: 'all-services',
  imports: [V4Slider, Navbar, Footer, HeroSection, MySlider, Container, TranslatePipe, PaperDesignSection, AnimateOnScrollDirective, InfiniteHorizontalScroll, CardServices],
  templateUrl: './all-services.html',
  styleUrl: './all-services.css',
})
export default class AllServices implements OnInit {
    private seo = inject(SeoService);

    ngOnInit(): void {
      this.seo.update({
        title: 'Our Services | SECO Groupe',
        description:
          'Explore SECO Groupe services: janitorial & cleaning, building maintenance, staffing solutions, outdoor care, security & concierge and hospitality support.',
        path: '/services',
      });
    }

    serviceSections: ServiceSection[] = [
  {
    title: 'Janitorial & Cleaning',
    icon: 'ri-brush-line',
    color: 'bg-gradient-to-r from-blue-50 to-blue-100',
    description: 'Beyond simply cleaning, our services ensure a healthy, productive, and welcoming environment for your employees and clients',
    imageUrl: [
      "img/services/Janitorial & Cleaning/01.jpg",
      "img/services/Janitorial & Cleaning/02.jpg",
      "img/services/Janitorial & Cleaning/03.jpg",
      "v4/img/services/janitorial.png"
      // 'img/services/compressed/housekeeping_services_500.webp',
      // 'v4/img/services/janitorial.png'
    ],
    subServices: [
      {
        title: 'Pristine Environments',
        icon: 'ri-sparkling-line',
        description: 'Daily, weekly, or custom cleaning schedules tailored to your facility\'s needs—from offices and commercial spaces to industrial sites.'
      },
      {
        title: 'Health & Safety Focus',
        icon: 'ri-shield-cross-line',
        description: 'Use of industry-leading practices and eco-friendly products to promote a sterile environment and reduce the spread of germs.'
      },
      {
        title: 'Specialized Care',
        icon: 'ri-tools-line',
        description: 'Deep cleaning, floor care (stripping, waxing, buffing), window cleaning, and waste management.'
      }
    ]
  },
  {
    title: 'Building Maintenance',
    icon: 'ri-building-2-line',
    color: 'bg-gradient-to-r from-gray-50 to-gray-100',
    description: 'Protecting your investment requires proactive and expert maintenance. We keep your infrastructure running smoothly and efficiently.',
    imageUrl: [
      "img/services/Building Maintenance/01.jpg",
      "img/services/Building Maintenance/02.jpg",
      'img/services/compressed/building_maintenance.webp',
      'img/services/compressed/building_maintenance_2_500.webp',
      'img/services/new/compressed/building_maintenance_500.webp'],
    subServices: [
      {
        title: 'Preventative Maintenance',
        icon: 'ri-settings-3-line',
        description: 'Regular inspections and maintenance of essential building systems to minimize unexpected breakdowns and costly repairs.'
      },
      {
        title: 'General Repairs',
        icon: 'ri-hammer-line',
        description: 'Handyman services including minor plumbing, electrical, carpentry, drywall, and painting.'
      },
      {
        title: 'HVAC & Equipment Oversight',
        icon: 'ri-temp-hot-line',
        description: 'Coordination and basic maintenance checks for heating, ventilation, air conditioning, and other facility equipment.'
      },
      {
        title: 'Groundskeeping (Optional highlight)',
        icon: 'ri-leaf-line',
        description: 'Keeping the exterior professional and well-maintained.'
      }
    ]
  },
  {
    title: 'Staffing Solutions',
    icon: 'ri-group-line',
    color: 'bg-gradient-to-r from-blue-50 to-blue-100',
    description: 'When you need specialized help fast, our staffing division provides vetted, trained, and reliable personnel to fill essential roles within your facility or organization.',
    imageUrl: [
      "img/services/Staffing Solutions/01.jpg",
      "img/services/Staffing Solutions/02.jpg"
      // 'img/services/new/compressed/facility_management_1_500.webp',
      // 'img/services/new/compressed/facility_management_1_500.webp',
      // 'img/services/new/compressed/facility_management_1_500.webp'
    ],
    subServices: [
      {
        title: 'Flexible Staffing',
        icon: 'ri-exchange-line',
        description: 'Temporary, temp-to-hire, and direct placement services to meet fluctuating demands.'
      },
      {
        title: 'Vetted Professionals',
        icon: 'ri-user-follow-line',
        description: 'We handle all recruitment, screening, background checks, and initial training to ensure high-quality candidates.'
      },
      {
        title: 'Focus Areas',
        icon: 'ri-focus-2-line',
        description: `Provision of staff for all our core service areas (janitorial, maintenance,
          security, and concierge roles).`
      }
    ]
  },
  // service-line
  {
    title: 'Outdoor Care',
    icon: 'ri-scissors-line',
    color: 'bg-gradient-to-r from-gray-50 to-gray-100',
    description: 'Elevate the experience for residents, tenants, and visitors with professional, hospitable, and highly effective concierge support.',
    imageUrl: [
      'img/services/new/gazon2.jpg',
      'img/services/new/tonte-gazon-elagage-nettoyage.jpg',
      'img/services/new/gazon2.jpg'],
    subServices: [
      {
        title: 'First Impressions',
        icon: 'ri-emotion-happy-line',
        description: 'Highly trained, polished, and friendly personnel serving as the welcoming face of your building.'
      },
      {
        title: 'Operational Support',
        icon: 'ri-briefcase-line',
        description: 'Managing front desk operations, package handling, visitor registration, access control, and amenity bookings.'
      },
      {
        title: 'Customized Service',
        icon: 'ri-customer-service-2-line',
        description: 'Acting as a central hub for information and assistance, tailored to the specific needs of residential, corporate, or luxury properties.'
      }
    ]
  },
  {
    title: 'Security & Concierge',
    icon: 'ri-shield-keyhole-line',
    color: 'bg-gradient-to-r from-blue-50 to-blue-100',
    description: 'Protecting your assets, people, and property is our paramount commitment. Our security experts provide a powerful blend of technology and human presence.',
    imageUrl: [
      "img/services/Security & Concierge/01.jpg",
      "img/services/Security & Concierge/02.jpg",
      "img/services/Security & Concierge/03.jpg",
      'img/services/compressed/bg_seco_securite_1440.webp',
      'img/services/compressed/security_guard_female_1440.webp',
      'img/services/compressed/concierge_1440.webp'
    ],
    subServices: [
      {
        title: '24/7 Protection',
        icon: 'ri-time-line',
        description: 'Trained and licensed security guards for static guarding, mobile patrols, and access control.'
      },
      {
        title: 'Risk Assessment',
        icon: 'ri-search-eye-line',
        description: 'Comprehensive security audits to identify vulnerabilities and implement strategic protection plans.'
      },
      {
        title: 'Integrated Solutions',
        icon: 'ri-camera-line',
        description: 'Deployment of advanced security technology, including surveillance (CCTV), alarm monitoring, and state-of-the-art access systems.'
      },
      {
        title: 'Emergency Response',
        icon: 'ri-alarm-warning-line',
        description: 'Professional handling of security incidents, emergency situations, and immediate response coordination.'
      }
    ]
  },
  {
    title: 'Hospitality Support',
    icon: 'ri-brush-line',
    color: 'bg-gradient-to-r from-blue-50 to-blue-100',
    description: 'Beyond simply cleaning, our services ensure a healthy, productive, and welcoming environment for your employees and clients',
    imageUrl: [
      "img/services/Hospitality Support/01.jpg",
      "img/services/Hospitality Support/02.jpg"
      // 'img/services/compressed/housekeeping_services_1440.webp',
      // 'img/services/compressed/housekeeping_services_1440.webp',
      // 'img/services/compressed/housekeeping1_1440.webp'
    ],
    subServices: [
      {
        title: 'Pristine Environments',
        icon: 'ri-sparkling-line',
        description: 'Daily, weekly, or custom cleaning schedules tailored to your facility\'s needs—from offices and commercial spaces to industrial sites.'
      },
      {
        title: 'Health & Safety Focus',
        icon: 'ri-shield-cross-line',
        description: 'Use of industry-leading practices and eco-friendly products to promote a sterile environment and reduce the spread of germs.'
      },
      {
        title: 'Specialized Care',
        icon: 'ri-tools-line',
        description: 'Deep cleaning, floor care (stripping, waxing, buffing), window cleaning, and waste management.'
      }
    ]
  }
]
}
