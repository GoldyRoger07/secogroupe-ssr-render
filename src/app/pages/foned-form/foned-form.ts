import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-foned-form',
  imports: [],
  templateUrl: './foned-form.html',
  styleUrl: './foned-form.css',
})
export default class FonedForm implements OnInit{
  seo = inject(SeoService)
  platformId = inject(PLATFORM_ID);
  router = inject(Router)

  private readonly googleFormUrl =
    'https://forms.gle/tbu29ANRruBHDQeq9';

  ngOnInit(): void {

    this.seo.update({
      title: 'Rantre lekòl 2026 | Fondation Nestor Pour Le Développement',
      description: 'Fondasyon Nestor bò kote tout paran ak elèv yo. Nap sipòte w jodi a, paske nou kwè timoun yo se avni peyi a.',
      path: '/foned',
      image: 'https://secogroupe.com/img/foned-flyer.jpeg',
    });

    if(isPlatformBrowser(this.platformId)){
      setTimeout(() => {
        window.location.href = this.googleFormUrl;
        // this.router.navigate(["/hiring"])
      }, 3000);
    }
  }
}
