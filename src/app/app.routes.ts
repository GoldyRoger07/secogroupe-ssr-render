import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', loadComponent: ()=> import('./pages/home/home')  },
    { path: 'request-a-quote', loadComponent: ()=> import('./pages/request-a-quote/request-a-quote') },
    { path: 'about-us', loadComponent: ()=> import('./pages/about/about')  },
    { path: 'preferred-vendors', loadComponent: ()=> import('./pages/preferred-vendors/preferred-vendors')  },
    { path: 'services', loadComponent: ()=> import('./pages/all-services/all-services') },
    { path: 'services/staffing-solutions', loadComponent: ()=> import('./pages/services/staffing-solutions/staffing-solutions') },
    { path: 'services/hospitality-support', loadComponent: ()=> import('./pages/services/hospitality-support/hospitality-support') },
    { path: 'services/janitorial-cleaning', loadComponent: ()=> import('./pages/services/janitorial-cleaning/janitorial-cleaning') },
    { path: 'services/building-maintenance', loadComponent: ()=> import('./pages/services/building-maintenance/building-maintenance') },
    { path: 'services/outdoor-care', loadComponent: ()=> import('./pages/services/outdoor-care/outdoor-care') },
    { path: 'services/concierge-security-experts', loadComponent: ()=> import('./pages/services/concierge-security-experts/concierge-security-experts') },
    { path: 'services-country/:pays', loadComponent: ()=> import('./pages/services-country/services-country') , pathMatch: 'full'},
    { path: 'contact', loadComponent: ()=> import('./pages/contact/contact') },
    { path: 'hiring', loadComponent: ()=> import('./pages/hiring/hiring-page') },
    { path: 'apply-now', loadComponent: ()=> import('./pages/apply-now/apply-now') },
    { path: 'blog', loadComponent: ()=> import('./pages/blog/blog') },
    { path: 'blog/:slug', loadComponent: ()=> import('./pages/blog-detail/blog-detail') }
];

