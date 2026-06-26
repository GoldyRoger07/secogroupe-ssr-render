import { Component, HostListener, inject } from '@angular/core';
import { FilialeService } from '../../services/filiale-service';
import { TranslatePipe } from '@ngx-translate/core';
import { Container } from "../container/container";

@Component({
  selector: 'card-services',
  imports: [TranslatePipe, Container],
  templateUrl: './card-services.html',
  styleUrl: './card-services.css',
})
export class CardServices {

  
  activeCardIndex: number | null = null;
  
  filialeService = inject(FilialeService)

  previewInfo = this.filialeService.previewInfo

   previewIcons = {
    security: "/images/logos/security_services.png",
    staffing: "/images/logos/house_keeping.png",
    building: "/images/logos/building_maintenance.png",
    hospitality: "/images/logos/staffing_services.png",
    outdoor: "/images/logos/outdoor_care.png",
    janitorial: "/images/logos/janitorial_services.png",
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

  selectCard(event: Event, index: number) {
    event.stopPropagation();
    this.activeCardIndex = this.activeCardIndex === index ? null : index;
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.activeCardIndex = null;
  }
}
