/**
 * Bulles décoratives autour de l'illustration du hero.
 * Coordonnées exprimées dans le viewBox du SVG (1000 × 678) ; l'illustration occupe x 40 → 576.
 */

export interface Bubble {
  id: number;
  x: number;
  y: number;
  r: number;
  color: string;
  /** Durée d'un cycle (montée + éclatement), fixe pour toute la vie de la bulle. */
  duration: number;
  /** Décalage du premier cycle, pour que les bulles ne naissent pas ensemble. */
  delay: number;
}

/** Peu de bulles : l'effet doit rester discret. */
export const BUBBLE_COUNT = 6;

/** Couleurs de la marque : bleu SECO et orange des barres. */
const COLORS = ['#0C73BA', '#F9A535'];

/**
 * Deux bandes de part et d'autre du personnage, pour ne pas passer sur le visage :
 * les bulles naissent sur les côtés de l'illustration.
 */
const ZONES = [
  { xMin: 60, xMax: 190, yMin: 120, yMax: 620 },
  { xMin: 440, xMax: 570, yMin: 120, yMax: 620 },
];

const random = (min: number, max: number) => min + Math.random() * (max - min);
const pick = <T>(items: T[]) => items[Math.floor(Math.random() * items.length)];

/** Nouvelle position, taille et couleur : appelé à la naissance puis à chaque cycle. */
function placement(): Pick<Bubble, 'x' | 'y' | 'r' | 'color'> {
  const zone = pick(ZONES);
  return {
    x: Math.round(random(zone.xMin, zone.xMax)),
    y: Math.round(random(zone.yMin, zone.yMax)),
    r: Math.round(random(5, 13)),
    color: pick(COLORS),
  };
}

/** `startAfter` : délai minimal avant la première bulle (fin de l'entrée du hero). */
export function createBubbles(startAfter: number): Bubble[] {
  return Array.from({ length: BUBBLE_COUNT }, (_, id) => ({
    id,
    ...placement(),
    duration: Math.round(random(4200, 6500)),
    delay: Math.round(startAfter + random(0, 4000)),
  }));
}

/**
 * Déplace une bulle entre deux cycles. Durée et délai ne changent pas :
 * les modifier relancerait l'animation CSS en cours.
 */
export function respawn(bubble: Bubble): Bubble {
  return { ...bubble, ...placement() };
}
