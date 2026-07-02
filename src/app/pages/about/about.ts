import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Container } from '../../components/container/container';
import { Footer } from '../../components/footer/footer';
import { isPlatformBrowser } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-about',
  imports: [Navbar, Footer, Container, Navbar, AnimateOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export default class About implements OnInit{

  platformId = inject(PLATFORM_ID);
  seo = inject(SeoService);


   ourCoreValueCards = [
    {
      title: 'Excellence & Quality',
      description: `We pursue the highest standards in everything we do, from
                    the cleanliness of a floor to the professionalism of our staff. We believe quality
                    service is the foundation of lasting partnerships.`
    },
    {
      title: 'Integrity & Trust',
      description: `We operate with complete transparency, honesty, and ethical
conduct. Our clients trust us with their security and their infrastructure, and we honor
that trust above all.`
    },
    {
      title: 'Proactive Expertise',
      description: `We don't just react to problems; we anticipate them. Our teams
are cross-trained and equipped with the expertise to provide proactive maintenance,
leading-edge security, and smart staffing solutions.
4.​ Integrated Partnership: We treat our client relation`
    },
    {
      title: 'Integrated Partnership',
      description: `We treat our client relationships as true partnerships. By
offering a comprehensive suite of services, we integrate seamlessly into your
operations to provide maximum efficiency and value.`
    },
    {
      title: 'Safety & Well-being',
      description: `We prioritize the safety of your people, your assets, and our
own employees. We ensure all environments we manage are secure, healthy, and
compliant with all regulations.`
    },

  ]

  ngOnInit(): void {
    this.seo.update({
      title: 'About Us | SECO Groupe',
      description:
        'SECO Groupe is an international business support company providing hospitality support, janitorial cleaning, staffing solutions, concierge and security services across multiple countries.',
      path: '/about-us',
    });

    if(isPlatformBrowser(this.platformId)){
       const sections = document.querySelectorAll(".section-animate")

    
        const observer = new IntersectionObserver((entries)=>{
            // console.log(entries)

    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(!entry.target.classList.contains("active"))
                entry.target.classList.add("active")
        }
    })
    
    },{
    threshold: 0.75
    })

    sections.forEach(section => {
        observer.observe(section)
    })
    }
  }
}
