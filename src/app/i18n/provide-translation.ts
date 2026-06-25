import { APP_INITIALIZER, EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

import { TranslationService } from './translation.service';

function initTranslation(translation: TranslationService): () => Promise<void> {
  return () => translation.init();
}

export function provideTranslation(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initTranslation,
      deps: [TranslationService],
      multi: true,
    },
  ]);
}
