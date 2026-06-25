import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideTranslationInitializer } from './i18n/provide-translation';
import { routes } from './app.routes';
import { provideTransloco } from '@jsverse/transloco';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './i18n/supported-locales';
import { TranslocoHttpLoader } from './i18n/transloco-loader';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { languageHeaderInterceptor } from './interceptors/language-header.interceptor';

// Sobre a internacionalização, aqui ocorre o registro da lib transloco, do translationInitializer e do interceptor das chamadas
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([languageHeaderInterceptor])),
    provideRouter(routes),
    provideTransloco({
      config: {
        availableLangs: SUPPORTED_LOCALES, // nao repete ['pt', 'en', 'es'],  seus AppLocale possíveis ficam num único lugar
        defaultLang: DEFAULT_LOCALE,
        reRenderOnLangChange: true, // re-renderiza templates ao trocar idioma
        prodMode: false,
      },
      loader: TranslocoHttpLoader,
    }),
    provideTranslationInitializer(),
  ],
};
