import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppLocale, SUPPORTED_LOCALES } from '../../i18n/supported-locales';
import { TranslocoModule } from '@jsverse/transloco';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, TranslocoModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly translation = inject(LanguageService);

  readonly languages = SUPPORTED_LOCALES;
  readonly currentLang = this.translation.currentLang;


  teste() {
  alert('Funcionou!');
}

  setLanguage(locale: AppLocale): void {
    void this.translation.setLanguage(locale).catch((err) => {
      console.error('[i18n] falha ao trocar idioma:', err);
    });
  }
}
