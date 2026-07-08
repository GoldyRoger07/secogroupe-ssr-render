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

  previewInfo = this.filialeService.previewInfo

  previewIcons = {
    security: "/images/logos/security_services.png",
    staffing: "/images/logos/house_keeping.png",
    building: "/images/logos/building_maintenance.png",
    hospitality: "/images/logos/staffing_services.png",
    outdoor: "/images/logos/outdoor_care.png",
    janitorial: "/images/logos/janitorial_services.png",
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


  getPreviewInfo(service: string){
    return this.previewInfo.find(p => p.service.toLocaleLowerCase() === service)
  }

}