import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-apply-now',
  imports: [],
  templateUrl: './apply-now.html',
  styleUrl: './apply-now.css',
})
export default class ApplyNow implements OnInit {

  seo = inject(SeoService)
  platformId = inject(PLATFORM_ID);
  router = inject(Router)

  private readonly googleFormUrl =
    'https://forms.gle/NGFQqQjCR5mZvQbY7';

  ngOnInit(): void {

    this.seo.update({
      title: 'Apply Now | SECO Groupe',
      description: 'Join our professional team. Complete the SECO Groupe application form today.',
      path: '/apply-now',
      image: 'https://secogroupe.com/img/apply_now_flyer.jpeg',
    });

    if(isPlatformBrowser(this.platformId)){
      setTimeout(() => {
        // window.location.href = this.googleFormUrl;
        this.router.navigate(["/hiring"])
      }, 3000);
    }
  }
}
