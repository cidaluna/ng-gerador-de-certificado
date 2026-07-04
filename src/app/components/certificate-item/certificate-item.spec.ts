import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CertificateItem } from './certificate-item';
import { TranslocoTestingModule } from '@jsverse/transloco';

describe('CertificateItem', () => {
  let component: CertificateItem;
  let fixture: ComponentFixture<CertificateItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CertificateItem,
        TranslocoTestingModule.forRoot({
          langs: {
            pt: {},
            en: {},
            es: {},
          },
          translocoConfig: {
            availableLangs: ['pt-BR', 'en-US', 'es-ES'],
            defaultLang: 'pt-BR',
          },
        }),
      ],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
