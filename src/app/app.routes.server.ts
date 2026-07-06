import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services-country/:pays',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      ['usa', 'canada', 'haiti', 'bahamas', 'brazil'].map((pays) => ({ pays })),
  },
  {
    // Contenu dynamique tiré du backend → rendu côté serveur à la demande (SSR)
    // pour que Google indexe le contenu. Les données HttpClient sont transférées
    // au client via le HTTP transfer cache (provideClientHydration).
    path: 'blog',
    renderMode: RenderMode.Server,
  },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
