import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

import { TranslatePipe } from '../../i18n/translate.pipe';
import { TranslationService } from '../../i18n/translation.service';
import { AppLocale, SUPPORTED_LOCALES } from '../../i18n/supported-locales';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, RouterModule, TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  private readonly translation = inject(TranslationService);

  readonly languages = SUPPORTED_LOCALES;
  readonly currentLang = this.translation.currentLang;

  setLanguage(locale: AppLocale): void {
    void this.translation.use(locale);
  }
}
