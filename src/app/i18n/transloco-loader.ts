import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Translation, TranslocoLoader } from '@jsverse/transloco';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  // Não sabe lógica, só sabe buscar o arquivo json do idioma que lhe foi pedido
  private readonly http = inject(HttpClient);

  getTranslation(locale: string) {
    return this.http.get<Translation>(`/i18n/${locale}.json`);
  }
}
