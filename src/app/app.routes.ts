import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', loadComponent: ()=> import('./pages/home/home')  },
    { path: 'request-a-quote', loadComponent: ()=> import('./pages/request-a-quote/request-a-quote') },
    { path: 'about-us', loadComponent: ()=> import('./pages/about/about')  },
    { path: 'services', loadComponent: ()=> import('./pages/all-services/all-services') },
    { path: 'services-country/:pays', loadComponent: ()=> import('./pages/services-country/services-country') , pathMatch: 'full'},
    { path: 'contact', loadComponent: ()=> import('./pages/contact/contact') },
    { path: 'hiring', loadComponent: ()=> import('./pages/hiring/hiring-page') },
    { path: 'apply-now', loadComponent: ()=> import('./pages/apply-now/apply-now') }
];

