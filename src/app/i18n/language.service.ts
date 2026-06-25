// language.service.ts
import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { firstValueFrom } from 'rxjs';

import {
  AppLocale,
  LOCALE_STORAGE_KEY,
  resolveInitialLocale,
} from './supported-locales';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  // Central que orquestra o transloco + localstorage + a troca manual de idioma
  private readonly translocoService = inject(TranslocoService);

  readonly currentLang = toSignal(this.translocoService.langChanges$, {
    initialValue: this.translocoService.getActiveLang() as AppLocale,
  });

  /** Chamado uma única vez, no boot da aplicação. */
  async init(): Promise<void> {
    const initialLocale = resolveInitialLocale();
    await this.applyLanguage(initialLocale, 'init');
  }

  /** Chamado quando o usuário clica para trocar de idioma. */
  async setLanguage(locale: AppLocale): Promise<void> {
    await this.applyLanguage(locale, 'user-click');
  }

  translate(key: string, params?: Record<string, string>): string {
    return this.translocoService.translate(key, params);
  }

  private async applyLanguage(locale: AppLocale, origin: 'init' | 'user-click'): Promise<void> {
    console.log(`[i18n] aplicando "${locale}" — origem: ${origin}`);

    // .load() busca o JSON e ESPERA a resposta antes de continuar
    await firstValueFrom(this.translocoService.load(locale));

    this.translocoService.setActiveLang(locale);
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
    console.log(`[i18n] idioma ativo agora: ${this.translocoService.getActiveLang()}`);

  }
}
