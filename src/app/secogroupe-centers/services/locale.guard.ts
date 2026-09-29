import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LanguageService, Locale } from './language.service';

/** Active la locale portée par la branche de routes avant le rendu de ses pages. */
export function localeGuard(locale: Locale): CanActivateFn {
  return () => {
    inject(LanguageService).setLanguage(locale);
    return true;
  };
}
