import { Component, computed, inject } from '@angular/core';
import { Container } from '../../components/container/container';
import { LanguageService } from '../../services/language.service';
import { V4Slider } from '../../components/v4-slider/v4-slider';
import { AnimateOnScrollDirective } from '../../../directives/animate-on-scroll';

@Component({
  selector: 'app-about',
  imports: [Container, V4Slider, AnimateOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export default class About {
  protected readonly language = inject(LanguageService);
  protected readonly content = computed(() => this.language.content().about);
}
