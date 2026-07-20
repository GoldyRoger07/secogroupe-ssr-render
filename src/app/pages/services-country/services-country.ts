import { Component, inject, OnInit } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Container } from "../../components/container/container";
import { CommonModule } from '@angular/common';
import { Filiale } from '../../models/Filiale';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { FilialeService } from '../../services/filiale-service';
import { SeoService } from '../../services/seo-service';

interface CardData{
  front:{
    title: string
    cover: string,
  },
  back:{
    title: string,
    desc: string
  },
  link: string
}


@Component({
  selector: 'app-services-country',
  imports: [TranslatePipe, RouterLink,Navbar, Footer, Container, CommonModule],
  templateUrl: './services-country.html',
  styleUrl: './services-country.css'
})
export default class ServicesCountry implements OnInit{
  
  pays: string = '';

  filiales: Filiale[] = []

  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)
  filialeService = inject(FilialeService)
  seo = inject(SeoService)

  private readonly countryLabels: Record<string, string> = {
    usa: 'the USA',
    canada: 'Canada',
    haiti: 'Haiti',
    bahamas: 'the Bahamas',
    brazil: 'Brazil',
  }

  cardDatas: CardData[] = [
  {
    front: {
      title: 'Seco Securité',
      cover: "/images/logos/security_services.png"
    },
    back: {
      title: 'Sécurité & Protection',
      desc: "Des solutions de sécurité sur mesure incluant gardiennage, protection rapprochée, surveillance d'événements et sécurisation de biens pour particuliers et entreprises."
    },
    link: '/services/haiti/seco-security'
  },
  {
    front: {
      title: 'Seco Homes & Construction',
      cover: "/img/haiti-services/seco-homes-construction.png"
    },
    back: {
      title: 'Construction & Immobilier',
      desc: "Construction, rénovation, gestion immobilière et location de maisons, appartements et espaces commerciaux adaptés à tous vos besoins."
    },
    link: '/services/haiti/seco-homes-construction'
  },
  {
    front: {
      title: 'Seco Logistique',
      cover: "/img/haiti-services/seco-logistique.png"
    },
    back: {
      title: 'Logistique Intégrée',
      desc: "Organisation, coordination et gestion de la chaîne logistique afin d'assurer un approvisionnement efficace et des opérations fluides."
    },
    link: '/services/haiti/seco-logistique'
  },
  {
    front: {
      title: 'Seco Tech',
      cover: "/images/logos/building_maintenance.png"
    },
    back: {
      title: 'Technologies & Innovation',
      desc: "Des services technologiques modernes incluant développement logiciel, infrastructures informatiques, transformation numérique et support technique."
    },
    link: '/services/haiti/seco-tech'
  },
  {
    front: {
      title: 'Seco Distributors',
      cover: "/img/haiti-services/seco-distributors.png"
    },
    back: {
      title: 'Transport & Distribution',
      desc: "Des solutions de transport et de distribution fiables pour assurer l'acheminement rapide et sécurisé des marchandises."
    },
    link: '/services/haiti/seco-distributors'
  },
  {
    front: {
      title: 'Mass Assurance',
      cover: "/img/haiti-services/mass-assurance.png"
    },
    back: {
      title: 'Protection & Assurance',
      desc: "Des solutions d'assurance conçues pour protéger les particuliers et les entreprises contre les imprévus avec des couvertures adaptées."
    },
    link: '/services/haiti/seco-assurance'
  },
  {
    front: {
      title: 'Mass Funds',
      cover: "/img/haiti-services/mass-funds.png"
    },
    back: {
      title: 'Finance & Investissement',
      desc: "Des services financiers destinés à accompagner l'épargne, le financement et les investissements pour soutenir la croissance de nos clients."
    },
    link: '/services/haiti/mass-funds'
  }
]

  previewInfo = this.filialeService.previewInfo

  previewIcons = {
    otherCountry:{
      security: "/images/logos/security_services.png",
      staffing: "/images/logos/house_keeping.png",
      building: "/images/logos/building_maintenance.png",
      hospitality: "/images/logos/staffing_services.png",
      outdoor: "/images/logos/outdoor_care.png",
      janitorial: "/images/logos/janitorial_services.png",
    },
    haiti:{
      security: "/images/logos/security_services.png",
      building: "/images/logos/building_maintenance.png",

    }
  }
  
  ngOnInit(): void {
    

    this.activatedRoute.paramMap.subscribe(params => {
      this.pays = params.get('pays') || "";
      

      if(!(this.pays === "usa" || this.pays === "canada" || this.pays === "haiti" || this.pays === "bahamas" || this.pays === "brazil"))
          this.router.navigate(['/']);
      else {
          this.filiales = this.filialeService.getFilialesByPays(this.pays)

          const label = this.countryLabels[this.pays] ?? this.pays;
          this.seo.update({
            title: `Services in ${label.replace(/^the /, '')} | SECO Groupe`,
            description: `Reliable hospitality, maintenance, cleaning, staffing, concierge and security services delivered by SECO Groupe in ${label}.`,
            path: `/services-country/${this.pays}`,
          });
      }

    });
  }


  getImgUrls(){
    let tab = []

    for(let i=0; i<14; i++){
      let imgUrl
      if(i===0)
          imgUrl = "images/services/housekeeping.jpg"
      else
          imgUrl = "images/services/housekeeping"+i+".jpg"

      tab.push(imgUrl)
    }

    return tab
  }


  getPreviewInfo(service: string, otherCountry: boolean){
    if(otherCountry)
      return this.previewInfo.otherCountry.find(p => p.service.toLocaleLowerCase() === service)
    
    return this.previewInfo.haiti.find((p:any) => p.service.toLocaleLowerCase() === service)

  }

}