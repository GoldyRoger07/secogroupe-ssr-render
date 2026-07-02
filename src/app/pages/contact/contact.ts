import { Component, inject, OnInit } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { ReactiveFormsModule } from '@angular/forms';
import { SeoService } from '../../services/seo-service';

@Component({
  selector: 'app-contact',
  imports: [Navbar, Footer, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export default class Contact implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Contact Us | SECO Groupe',
      description:
        'Get in touch with SECO Groupe for facility management, security, cleaning and staffing services. Our team is ready to answer your questions.',
      path: '/contact',
    });
  }
}
