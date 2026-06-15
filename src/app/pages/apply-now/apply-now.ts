import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

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

  private readonly googleFormUrl =
    'https://forms.gle/NGFQqQjCR5mZvQbY7';

    constructor(){
       
    }

  ngOnInit(): void {
    // if(isPlatformBrowser(this.platformId)){
    //   setTimeout(() => {
    //     window.location.href = this.googleFormUrl;
    //   }, 3000);
    // }
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
      content: 'https://secogroupe.com/img/apply_now_flyer.jpg'
    });

    this.meta.updateTag({
      property: 'og:url',
      content: 'https://secogroupe.com/apply-now'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });
  }
}
