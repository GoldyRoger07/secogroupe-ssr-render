import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // { path: '', renderMode: RenderMode.Prerender },
  // { path: 'about-us', renderMode: RenderMode.Server },
  { path: 'apply-now', renderMode: RenderMode.Prerender },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
