import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateForm } from './certificate-form';
import { TranslocoTestingModule } from '@jsverse/transloco';

describe('CertificateForm', () => {
  let component: CertificateForm;
  let fixture: ComponentFixture<CertificateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CertificateForm,
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
        })
      ],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
