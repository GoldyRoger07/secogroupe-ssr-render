import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services-country/:pays',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      ['usa', 'canada', 'haiti', 'bahamas', 'brazil'].map((pays) => ({ pays })),
  },
  {
    // Contenu dynamique tiré du backend → rendu côté client (pas de prerender au build).
    path: 'blog',
    renderMode: RenderMode.Client,
  },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
