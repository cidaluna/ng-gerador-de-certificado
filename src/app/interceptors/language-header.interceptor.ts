import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

export const languageHeaderInterceptor: HttpInterceptorFn = (req, next) => {
  // Olha para todas as requisições HTTP e adiciona no Headers da chamada o idioma ativo
  const translocoService = inject(TranslocoService);
  const activeLang = translocoService.getActiveLang();
  console.log(`[i18n] header Accept-Language="${activeLang}" → ${req.url}`);

  const requestWithLanguage = req.clone({
    setHeaders: { 'Accept-Language': activeLang },
  });

  return next(requestWithLanguage);
};
