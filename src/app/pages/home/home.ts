import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import V4Home from "../../components/v4/home/home";
import { Container } from '../../components/container/container';
import { Footer } from '../../components/footer/footer';
import { Title, Meta } from '@angular/platform-browser';
// import { Router } from 'express';
import { Router } from '@angular/router';
import { SelectType } from '../../models/SelectType';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MySlider } from '../../components/my-slider/my-slider';
import { Carousel } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll';
import { InfiniteHorizontalScroll } from "../../components/infinite-horizontal-scroll/infinite-horizontal-scroll";

interface CardService {
  name: string;
  description: string;
  cover: string;
}

@Component({
  selector: 'app-home',
  imports: [AnimateOnScrollDirective, ButtonModule, CardModule, CommonModule, TranslatePipe, V4Home, Container, Footer, ReactiveFormsModule, MySlider, Carousel, InfiniteHorizontalScroll],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home implements OnInit {
   // Pour le SEO
  title = inject(Title)
  meta = inject(Meta)
  platformId = inject(PLATFORM_ID);
  router = inject(Router)

  subsidiaries = [
    {url: 'img/subsidiaries/Seco groupe logo - Quality services-01.png', size: 'w-64'},
    {url: 'img/subsidiaries/Seco groupe logo optimal-01.png', size: 'w-64'},
    {url: 'img/subsidiaries/Seco groupe logo quality-01.png', size: 'w-64'},
    {url: 'img/subsidiaries/Seco groupe logo security-01.png', size: 'w-64'},
    {url: 'img/subsidiaries/Seco groupe logo Univers-01.png', size: 'w-64'},
    {url: 'img/subsidiaries/Seco groupe logo-01.png', size: 'w-64'}

  ]

  constructor(){
    if (isPlatformBrowser(this.platformId)) 
      localStorage.setItem('x', '1');
  }

  visible = false

  clients = [
    { size: "w-34", url: "img/clients/brana_logo.png" },
    { size: "w-54", url: "img/clients/Grand-Sierra-Resort-Logo.png" },
    { size: "w-54", url: "img/clients/grand_geneva_logo.jpeg" },
    { size: "w-44", url: "img/clients/Kalahari_Resorts_Horiz_Blue-768x257.avif" },
    { size: "w-34", url: "img/clients/logo_barbancourt.jpg" },
    { size: "w-34", url: "img/clients/logo_best_western.png" },
    { size: "w-34", url: "img/clients/logo_boomtown_resort.webp" },
    { size: "w-34", url: "img/clients/logo_camelback_resort.png" },
    { size: "w-34", url: "img/clients/logo_chulavista.png" },
    { size: "w-34", url: "img/clients/logo_dells_resort.png" },
    { size: "w-54", url: "img/clients/logo_fne.webp" },
    { size: "w-34", url: "img/clients/logo_ihsi.png" },
    { size: "w-34", url: "img/clients/logo_marriott.png" },
    { size: "w-44", url: "img/clients/logo_monarch_resort.png"}
    
  ]

  maps = [
    {
      imgUrl: 'v4/img/map/usa_map.png',
      title: 'United States'
    },
    {
      imgUrl: 'v4/img/map/canada_map.png',
      title: 'Canada'
    },
    {
      imgUrl: 'v4/img/map/haiti_map.png',
      title: 'Haiti'
    },
    {
      imgUrl: 'v4/img/map/brazil_map.png',
      title: 'Bresil'
    },
    {
      imgUrl: 'v4/img/map/bahamas_map.png',
      title: 'Bahamas'
    },
  ]

   // maps = [
  //   {
  //     imgUrl: 'img/maps/compressed/usa_map_512.webp',
  //     title: 'United States'
  //   },
  //   {
  //     imgUrl: 'img/maps/compressed/canada_map_512.webp',
  //     title: 'Canada'
  //   },
  //   {
  //     imgUrl: 'img/maps/compressed/haiti_map_512.webp',
  //     title: 'Haiti'
  //   },
  //   {
  //     imgUrl: 'img/maps/compressed/bahamas_map_512.webp',
  //     title: 'Bahamas'
  //   },
  //   {
  //     imgUrl: 'img/maps/compressed/bresil_map_512.webp',
  //     title: 'Bresil'
  //   },
  // ]

  cardServices: CardService[] = [
    {
      name: 'Building Maintenance',
      description: 'Protecting your investment requires proactive and expert maintenance. We keep your infrastructure running smoothly and efficiently...',
      cover: 'img/services/new/compressed/building_maintenance_500.webp'
    },
    {
      name: 'Security',
      description: 'Protecting your assets, people, and property is our paramount commitment. Our security experts provide a powerful blend of technology and human presence...',
      cover: 'img/services/compressed/security_guard_500.webp'
    },
    {
      name: 'Housekeeping',
      description: 'Beyond simply cleaning, our services ensure a healthy, productive, and welcoming environment for your employees and clients...',
      cover: 'img/services/compressed/housekeeping1_500.webp'
    },
    {
      name: 'Janitorial',
      description: 'Deep cleaning, floor care (stripping, waxing, buffing), window cleaning, and waste management...',
      cover: 'img/services/new/compressed/janitorial_hospital_500.webp'
    },
    {
      name: 'Staffing',
      description: 'When you need specialized help fast, our staffing division provides vetted, trained, and reliable personnel to fill essential roles within your facility or organization...',
      cover: 'img/services/compressed/staffing_solution_500.webp'
    },
    {
      name: 'Concierges',
      description: 'Elevate the experience for residents, tenants, and visitors with professional, hospitable, and highly effective concierge support...',
      cover: 'img/services/compressed/concierge_500.webp'
    }
  ]

  responsiveOptions: any[] | undefined;

  services: SelectType[] = [
    { name: 'Security', code: 'SS' },
    { name: 'Housekeeping', code: 'HK' },
    { name: 'Facility Management', code: 'FM' },
    { name: 'Staffing Solutions', code: 'ST' },
    { name: 'Consulting Services', code: 'CS' }
  ]

   selectedService: SelectType | null = null;

  formGroup = new FormGroup({
    selectedService: new FormControl(this.selectedService)
  })

  ngOnInit(): void {
     this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 4,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ]
    this.title.setTitle('Home — Secogroupe');
    this.meta.updateTag({ name: 'description', content: 'Senior Living. Compassionate care and support services designed to enhance quality of life for senior residents and their families. Multi-Family, HOA &' });
    this.meta.updateTag({ property: 'og:title', content: 'Seco groupe | Security' });


    if (isPlatformBrowser(this.platformId)){

    
     
        const sections = document.querySelectorAll("section")

    
const observer = new IntersectionObserver((entries)=>{
    // console.log(entries)

    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(!entry.target.classList.contains("active"))
                entry.target.classList.add("active")
        }
    })
    
    },{
    threshold: 0.25
    })

    sections.forEach(section => {
        observer.observe(section)
    })
    }
  }

  showDialog(country: string) {
        if(country === "Haiti")
          return;
        if(country.toLocaleLowerCase() === "united states")
          country = "usa"
          this.router.navigateByUrl("/services-country/"+country.toLocaleLowerCase())
        // else
        //   this.router.navigateByUrl("/services")
  }

}
