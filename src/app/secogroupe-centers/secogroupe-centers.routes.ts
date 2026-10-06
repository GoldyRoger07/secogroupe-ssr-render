import { Route, Routes } from '@angular/router';
import { SecogroupeCentersLayout } from './layout/secogroupe-centers-layout';
import { LOCALE_PREFIX, Locale } from './services/language.service';
import { localeGuard } from './services/locale.guard';

/**
 * Point d'entrée unique du projet. L'application hôte n'a besoin que d'une ligne :
 * `{ path: 'secogroupe-centers', loadChildren: () => import('./secogroupe-centers/secogroupe-centers.routes') }`
 * Pages, langues, SEO et 404 sont entièrement gérés ici.
 */

/** Pages du projet, identiques pour chaque langue. `data.seo` choisit titre et description. */
const pages: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home'),
    data: { seo: 'home' },
  },
  {
    path: 'signin',
    pathMatch: 'full',
    loadComponent: () => import('./pages/signin/signin'),
    data: { seo: 'signin' },
  },
  {
    path: 'signup',
    pathMatch: 'full',
    loadComponent: () => import('./pages/signup/signup'),
    data: { seo: 'signin' },
  },
  {
    path: 'about',
    pathMatch: 'full',
    loadComponent: () => import('./pages/about/about'),
    data: { seo: 'about' },
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found'),
    data: { seo: 'notFound' },
  },
];

/** Une branche par locale : `/secogroupe-centers` (fr) et `/secogroupe-centers/en`. */
function localeBranch(locale: Locale): Route {
  return {
    path: LOCALE_PREFIX[locale],
    component: SecogroupeCentersLayout,
    canActivate: [localeGuard(locale)],
    children: pages,
  };
}

// Les locales préfixées d'abord : la branche sans préfixe capture tout le reste.
export default [localeBranch('en'), localeBranch('fr'), localeBranch('es')] satisfies Routes;
