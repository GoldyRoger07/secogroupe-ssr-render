import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply-now',
  imports: [],
  templateUrl: './apply-now.html',
  styleUrl: './apply-now.css',
})
export default class ApplyNow implements OnInit {

  title = inject(Title)
  meta = inject(Meta)
  platformId = inject(PLATFORM_ID);
  router = inject(Router)

  private readonly googleFormUrl =
    'https://forms.gle/NGFQqQjCR5mZvQbY7';

    constructor(){
       
    }

  ngOnInit(): void {
    
    this.title.setTitle('Apply Now - SECO Groupe');

    this.meta.updateTag({
      property: 'og:title',
      content: 'Apply Now - SECO Groupe'
    });

    this.meta.updateTag({
      property: 'og:description',
      content: 'Join our professional team. Complete the application form today.'
    });

    this.meta.updateTag({
      property: 'og:image',
      content: 'https://secogroupe.com/img/apply_now_flyer.jpeg'
    });

    // this.meta.updateTag({
    //   property: 'og:image',
    //   content: 'https://secogroupe.com/img/Seco - Housekeeper & Houseman-01.jpeg'
    // });

    // Seco - Housekeeper & Houseman-01.jpeg

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://secogroupe.com/apply-now'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    if(isPlatformBrowser(this.platformId)){
      setTimeout(() => {
        // window.location.href = this.googleFormUrl;
        this.router.navigate(["/hiring"])
      }, 3000);
    }
  }
}
