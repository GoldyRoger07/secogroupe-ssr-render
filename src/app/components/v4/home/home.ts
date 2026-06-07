import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { interval } from 'rxjs';
import { Navbar } from '../../navbar/navbar';
import { MySlider } from '../../my-slider/my-slider';
import { V4MySlider } from '../my-slider/my-slider';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll';

@Component({
  selector: 'v4-home',
  imports: [Navbar, V4MySlider, AnimateOnScrollDirective],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export default class V4Home implements OnInit, OnDestroy {
  
  i = 0

  interval = 0

  fade = signal(false)

  images = [
    "v4/img/hero_section.jpg",
    "img/services/new/compressed/facility_management_1_1440.webp",
    "img/services/new/compressed/facility_management_1440.webp",
    "v4/img/hero_section_1.jpg",
    "v4/img/hero_section_2.jpg",
    "v4/img/hero_section_3.jpg",
    "v4/img/hero_section_4.jpg",
    "v4/img/hero_section_5.jpg",
    "v4/img/hero_section_6.jpg",

    "v4/img/hero_section.jpg",
    "img/services/new/compressed/facility_management_1_1440.webp",
    "img/services/new/compressed/facility_management_1440.webp",
    "v4/img/hero_section_1.jpg",
    "v4/img/hero_section_2.jpg",
    "v4/img/hero_section_3.jpg",
    "v4/img/hero_section_4.jpg",
    "v4/img/hero_section_5.jpg",
    "v4/img/hero_section_6.jpg"


    // "img/services/new/compressed/construction_worker_and_maintenance_1440.webp",
    // "img/services/new/compressed/facility_manager_1440.webp",
    // "img/services/compressed/concierge_1440.webp",

    // "img/services/new/compressed/housekeeping_team_1440.webp",
    // "img/services/new/compressed/janitorial_hospital_1440.webp",
    // "img/services/new/compressed/janitorial_1440.webp",
    // "img/services/compressed/security_guard_1440.webp",
    // "img/services/compressed/staffing_solution_1440.webp"
  ]
  ngOnInit(): void {
    // this.interval = setInterval((e:any)=>{

    //   this.fade.set(true)

    //   setTimeout(()=>{
    //     this.i = (this.i+1)%this.images.length
    //     document.querySelector('.hero-section')?.setAttribute('style', `--current-image: url('${this.images[this.i]}')`)
    //     this.fade.set(false)
    //   }, 500)
    //   console.log(e)
     
    // },5000)
  }

  ngOnDestroy(): void {
    // clearInterval(this.interval)
  }

}
