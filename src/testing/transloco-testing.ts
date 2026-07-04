import {
  TranslocoTestingModule,
  TranslocoTestingOptions,
} from '@jsverse/transloco';

import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
} from '../app/i18n/supported-locales';

export function getTranslocoTestingModule(
  options: Partial<TranslocoTestingOptions> = {}
) {
  return TranslocoTestingModule.forRoot({
    langs: createEmptyTranslations(),

    translocoConfig: {
      availableLangs: SUPPORTED_LOCALES,
      defaultLang: DEFAULT_LOCALE,
      reRenderOnLangChange: true,
      prodMode: false,
    },

    preloadLangs: true,

    ...options,
  });
}

function createEmptyTranslations() {
  return Object.fromEntries(
    SUPPORTED_LOCALES.map(locale => [locale, {}])
  );
}
