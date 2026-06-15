import { Component } from '@angular/core';

@Component({
  selector: 'infinite-horizontal-scroll',
  imports: [],
  templateUrl: './infinite-horizontal-scroll.html',
  styleUrl: './infinite-horizontal-scroll.css',
})
export class InfiniteHorizontalScroll {
  clients = [
    { size: "w-34", url: "img/clients/brana_logo.png" },
    { size: "w-54", url: "img/clients/Grand-Sierra-Resort-Logo.png" },
    { size: "w-54", url: "img/clients/grand_geneva_logo.jpeg" },
    { size: "w-44", url: "img/clients/Kalahari_Resorts_Horiz_Blue-768x257.avif" },
    { size: "w-34", url: "img/clients/logo_barbancourt.jpg" },
    { size: "w-34", url: "img/clients/logo_best_western.png" },
    { size: "w-34", url: "img/clients/logo_boomtown_resort.webp" },
    { size: "w-34", url: "img/clients/logo_camelback_resort.png" },
    { size: "w-34", url: "img/clients/logo_chulavista.png" },
    { size: "w-34", url: "img/clients/logo_dells_resort.png" },
    { size: "w-54", url: "img/clients/logo_fne.webp" },
    { size: "w-34", url: "img/clients/logo_ihsi.png" },
    { size: "w-34", url: "img/clients/logo_marriott.png" },
    { size: "w-44", url: "img/clients/logo_monarch_resort.png"}
    
  ]
}
