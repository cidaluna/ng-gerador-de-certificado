export const SUPPORTED_LOCALES = ['pt-BR', 'en-US'] as const;

export type AppLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: AppLocale = 'pt-BR';

export const LOCALE_STORAGE_KEY = 'app-locale';

export function isAppLocale(value: string | null): value is AppLocale {
  return value !== null && SUPPORTED_LOCALES.includes(value as AppLocale);
}

export function resolveInitialLocale(): AppLocale {
  const saved = localStorage.getItem(LOCALE_STORAGE_KEY);

  if (isAppLocale(saved)) {
    return saved;
  }

  return navigator.language.toLowerCase().startsWith('pt') ? 'pt-BR' : 'en-US';
}
