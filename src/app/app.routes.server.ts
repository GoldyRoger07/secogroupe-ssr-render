import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services-country/:pays',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () =>
      ['usa', 'canada', 'haiti', 'bahamas', 'brazil'].map((pays) => ({ pays })),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
