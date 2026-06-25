import { inject, provideAppInitializer } from '@angular/core';
import { LanguageService } from './language.service';

export function provideTranslationInitializer() {
  return provideAppInitializer(() => {
    const languageService = inject(LanguageService);
    return languageService.init(); // Promise<void> — o Angular espera ela resolver antes de exibir a primeira tela
  });
}
