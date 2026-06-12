import { Component, effect, ElementRef, Input, OnDestroy, OnInit, signal, viewChild } from '@angular/core';

@Component({
  selector: 'v4-slider',
  imports: [],
  templateUrl: './v4-slider.html',
  styleUrl: './v4-slider.css',
})
export class V4Slider implements OnDestroy{
   // Liste de vos images

  @Input()
  images = [
    "v4/img/services/mixed_workers.png",
    "v4/img/services/janitorial.png",
    "v4/img/services/housekeeping.png"
  ];

  // Signaux pour piloter l'affichage et l'animation
  isFaded = signal(false);
  currentImg1 = signal(this.images[0]);
  currentImg2 = signal(this.images[1] || this.images[0]); // Sécurité si tableau court

  private index = 0;
  private intervalId: any;
   private timeoutId: any;

  constructor() {
    this.startSlider();
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId)
    clearTimeout(this.timeoutId)
  }

  private startSlider() {
    this.intervalId = setInterval(() => {
      // 1. Calcul du prochain index d'image de manière circulaire
      this.index = (this.index + 1) % this.images.length;
      const nextImage = this.images[this.index];

      // 2. Logique de permutation des sources selon l'état du fondu
      if (this.isFaded()) {
        this.currentImg2.set(nextImage);
      } else {
        this.currentImg1.set(nextImage);
      }

      // 3. Inversion de l'état pour déclencher la transition CSS
      
      setTimeout(()=>this.isFaded.update(value => !value),50)
      
    }, 5000);

    // Nettoyage automatique du timer lors de la destruction du composant
  }

}
