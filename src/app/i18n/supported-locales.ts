export type AppLocale = 'pt-BR' | 'en-US';

export const SUPPORTED_LOCALES: AppLocale[] = ['pt-BR', 'en-US'];

export const DEFAULT_LOCALE: AppLocale = 'pt-BR';

export const LOCALE_STORAGE_KEY = 'app-locale';

// Verifica qual idioma está ativo/válido
export function isAppLocale(value: string | null): value is AppLocale {
  return value !== null && SUPPORTED_LOCALES.includes(value as AppLocale);
}

// Usa o idioma salvo no localstorage, se não existir usa o padrão pt-BR
export function resolveInitialLocale(): AppLocale {
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY);

  if (isAppLocale(saved)) {
    console.log('[i18n] idioma veio do localStorage:', saved);
    return saved;
  }

  console.log('[i18n] nada salvo/válido, usando padrão:', DEFAULT_LOCALE);
  return DEFAULT_LOCALE;
}
