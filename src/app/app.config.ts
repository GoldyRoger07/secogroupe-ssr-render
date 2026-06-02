import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { MyPreset } from './mypreset';
import { provideTranslateService } from '@ngx-translate/core';
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
import { provideHttpClient, withFetch } from '@angular/common/http';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyDmaRWwCdSbebk-fEk38aykp4EPJHf5hHg",
//   authDomain: "secogroupe-2f376.firebaseapp.com",
//   projectId: "secogroupe-2f376",
//   storageBucket: "secogroupe-2f376.firebasestorage.app",
//   messagingSenderId: "905643686305",
//   appId: "1:905643686305:web:d38c3242e10a8f1e3cb3e0"
// };

export const appConfig: ApplicationConfig = {
  providers: [
    // provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // provideBrowserGlobalErrorListeners(),
    provideRouter(routes,withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })), provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: MyPreset,
            options: {
                darkModeSelector: false || 'none'
            }
        }
    }),
    provideTranslateService({
            lang: 'en',
            fallbackLang: 'en',
            loader: provideTranslateHttpLoader({
                prefix: '/i18n/',
                suffix: '.json'
            })
    }),
  
  ]
};
