import { afterNextRender, Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../../components/container/container';
import { LanguageService } from '../../services/language.service';
import { Bubble, createBubbles, respawn } from './hero-bubbles';

/** Pause entre la fin du chargement de la page et le début de l'animation du hero. */
const HERO_ANIMATION_DELAY_MS = 300;

/** Les bulles apparaissent une fois l'illustration arrivée (voir `--bar-exit-delay` dans `home.css`). */
const BUBBLES_START_MS = 1300;

@Component({
  selector: 'cc-home',
  imports: [Container, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export default class Home {
  protected readonly language = inject(LanguageService);
  protected readonly content = computed(() => this.language.content().home);

  /** Passe à `true` une fois la page chargée : déclenche l'animation du hero (voir `home.css`). */
  protected readonly heroAnimated = signal(false);

  /** Vide côté serveur : les bulles, aléatoires, n'existent que dans le navigateur. */
  protected readonly bubbles = signal<Bubble[]>([]);

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Navigateur uniquement, après hydratation : l'animation ne peut plus être relancée
    // par le remplacement des styles ou le rendu client.
    afterNextRender(() => {
      let timer: ReturnType<typeof setTimeout> | undefined;
      const start = () => {
        timer = setTimeout(() => {
          this.heroAnimated.set(true);
          if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.bubbles.set(createBubbles(BUBBLES_START_MS));
          }
        }, HERO_ANIMATION_DELAY_MS);
      };

      if (document.readyState === 'complete') {
        start();
      } else {
        window.addEventListener('load', start, { once: true });
      }

      destroyRef.onDestroy(() => {
        clearTimeout(timer);
        window.removeEventListener('load', start);
      });
    });
  }

  /** Fin d'un cycle : la bulle vient d'éclater, elle renaît ailleurs. */
  protected respawnBubble(id: number): void {
    this.bubbles.update((bubbles) => bubbles.map((b) => (b.id === id ? respawn(b) : b)));
  }
}
