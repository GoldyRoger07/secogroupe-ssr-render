import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { HamburgerBtn } from '../hamburger-btn/hamburger-btn';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'v4-navbar',
  imports: [HamburgerBtn, RouterLink, RouterLinkActive, CommonModule ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{

  @Input()
  isTransparent = true

  @Input()
  textWhite = false

  currentUrl = signal('')

  activatedRoute = inject(ActivatedRoute)

  links = [
    { label: "Home", value: "/",
      // previewBox:{
      //   left:{
      //     title: "YOUR TRUSTED FACILITY SERVICE PROVIDER",
      //     desc: "At SECO GROUPE, we don't just see a building; We see an opportunity to create smarter more resilient, and connected space that delivers real value..."
      //   },
      //   right:[
      //     {label: 'Why Secogroupe', value: ''},
      //     {label: 'Our Leadership Team', value: ''},
      //     {label: 'Our History', value: ''},
      //   ]
      // } 
    },
    { label: "About Us", value: "/about-us",
      previewBox:{
        left:{
          title: "About Us",
          desc: "Seco Groupe is an international business support company providing hospitality support, janitorial cleaning, staffing solutions, concierge, and security..."
        },
        right:[
          // {label: 'Why Secogroupe', value: ''},
          // {label: 'Our Leadership Team', value: ''},
          // {label: 'Our History', value: ''},
          {label: 'Partner With Us', value: '/preferred-vendors'}
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
          {label: 'Hospitality support', value: '/services/hospitality-support'},
          {label: 'Building Maintenance', value: '/services/building-maintenance'},
          {label: 'Janitorial & cleaning', value: '/services/janitorial-cleaning'},
          {label: 'Staffing solutions', value: '/services/staffing-solutions'},
          {label: 'Concierge and security', value: '/services/concierge-security-experts'},
          {label: 'Outdoor Care', value: '/services/outdoor-care'}
        ]
      } },
    { label: "Apply Now", value: "/hiring",
      // previewBox:
      // {
      //   left:{
      //     title: "Transform your career dreams into reality",
      //     desc: "Working with Secogroupe is much more than a job – it is a career. We constantly strive to achieve our mission of making our customers look and perform their best..."
      //   },
      //   right:[
      //     {label: 'Why Secogroupe', value: ''},
      //     {label: 'Our Leadership Team', value: ''},
      //     {label: 'Our History', value: ''},
      //   ]
      // } 
    },
    { label: "Blog", value: "/blog",
      previewBox:{
        left:{
          title: "Blog",
          desc: "News, insights and expert tips from SECO Groupe on facility management, security, staffing and hospitality services..."
        },
        right:[
          {label: 'Seco Groupe Blog', value: '/blog'}
        ]
      } },
    { label: "Contact Us", value: "/contact",
      previewBox:{
        left:{
          title: "Get In Touch",
          desc: "Ready to start your project? Contact us today and let's discuss how we can help your business grow...."
        },
        right:[
          {label: 'Email Us: hr@secogroupe.com', value: ''},
          {label: 'Call Us: 954-314-7441', value: ''},
          {label: 'Visit Us: 2701 W Oakland Park Blvd Fort Lauderdale, FL 33311', value: ''},
        ]
      } }
    

  ]


  onClickMenuBtn(button: HamburgerBtn,mobileMenu: any) {
    button.isOpen = !button.isOpen
    mobileMenu.classList.toggle("open")
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(val=>{
      switch(val[0]?.path){
        case "about-us":
          this.currentUrl.set("About Us")
        break;
        case "services":
          this.currentUrl.set("Services")
        break;
        case "hiring":
          this.currentUrl.set("Apply Now")
        break;
        case "contact":
          this.currentUrl.set("Contact Us")
        break;
        case "blog":
          this.currentUrl.set("Blog")
        break;
        default:
          this.currentUrl.set("Home")
      }
    })
  }

}
