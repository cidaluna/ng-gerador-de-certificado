import { Pipe, PipeTransform, inject } from '@angular/core';

import { TranslationService } from './translation.service';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  private readonly translation = inject(TranslationService);

  transform(key: string, params?: Record<string, string>): string {
    this.translation.currentLang();
    return this.translation.instant(key, params);
  }
}
