import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import {
  AppLocale,
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  resolveInitialLocale,
} from './supported-locales';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly http = inject(HttpClient);
  private translations: Record<string, unknown> = {};

  readonly currentLang = signal<AppLocale>(DEFAULT_LOCALE);

  async init(): Promise<void> {
    await this.use(resolveInitialLocale());
  }

  async use(locale: AppLocale): Promise<void> {
    this.translations = await firstValueFrom(
      this.http.get<Record<string, unknown>>(`/i18n/${locale}.json`),
    );

    this.currentLang.set(locale);
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }

  instant(key: string, params?: Record<string, string>): string {
    const value = this.lookup(key);

    if (!params) {
      return value;
    }

    return Object.entries(params).reduce(
      (text, [paramKey, paramValue]) => text.replace(`{{${paramKey}}}`, paramValue),
      value,
    );
  }

  private lookup(key: string): string {
    const value = key.split('.').reduce<unknown>((current, part) => {
      if (typeof current !== 'object' || current === null || !(part in current)) {
        return undefined;
      }

      return (current as Record<string, unknown>)[part];
    }, this.translations);

    return typeof value === 'string' ? value : key;
  }
}
