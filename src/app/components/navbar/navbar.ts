import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HamburgerBtn } from '../hamburger-btn/hamburger-btn';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'v4-navbar',
  imports: [HamburgerBtn, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  @Input()
  isTransparent = true

  @Input()
  textWhite = false

  links = [
    { label: "Home", value: "/",
      previewBox:{
        left:{
          title: "YOUR TRUSTED FACILITY SERVICE PROVIDER",
          desc: "At SECO GROUPE, we don't just see a building; We see an opportunity to create smarter more resilient, and connected space that delivers real value..."
        },
        right:[
          {label: 'Why Secogroupe', value: ''},
          {label: 'Our Leadership Team', value: ''},
          {label: 'Our History', value: ''},
        ]
      } },
    { label: "About Us", value: "/about-us",
      previewBox:{
        left:{
          title: "About Us",
          desc: "Seco Groupe is an international business support company providing hospitality support, janitorial cleaning, staffing solutions, concierge, and security..."
        },
        right:[
          {label: 'Why Secogroupe', value: ''},
          {label: 'Our Leadership Team', value: ''},
          {label: 'Our History', value: ''},
        ]
      }
     },
    { label: "Services", value: "/services",
      previewBox:{
        left:{
          title: "Services",
          desc: "Seco Groupe is a full-service facility management provider operating in the United States, Canada, and the Caribbean, dedicated to maintaining the functionality, safety..."
        },
        right:[
          {label: 'Hospitality support', value: ''},
          {label: 'Janitorial & cleaning', value: ''},
          {label: 'Staffing solutions', value: ''},
          {label: 'Concierge and security'}
        ]
      } },
    { label: "Apply Now", value: "/hiring",
      previewBox:{
        left:{
          title: "Transform your career dreams into reality",
          desc: "Working with Secogroupe is much more than a job – it is a career. We constantly strive to achieve our mission of making our customers look and perform their best..."
        },
        right:[
          {label: 'Why Secogroupe', value: ''},
          {label: 'Our Leadership Team', value: ''},
          {label: 'Our History', value: ''},
        ]
      } },
    { label: "Contact Us", value: "/contact",
      previewBox:{
        left:{
          title: "About Us",
          desc: "Seco Groupe is an international business support company providing hospitality support, janitorial cleaning, staffing solutions, concierge, and security..."
        },
        right:[
          {label: 'Why Secogroupe', value: ''},
          {label: 'Our Leadership Team', value: ''},
          {label: 'Our History', value: ''},
        ]
      } }

  ]


  onClickMenuBtn(button: HamburgerBtn,mobileMenu: any) {
    button.isOpen = !button.isOpen
    mobileMenu.classList.toggle("open")
  }

}
