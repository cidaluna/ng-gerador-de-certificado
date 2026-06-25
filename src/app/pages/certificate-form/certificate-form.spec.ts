import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateForm } from './certificate-form';
import { TranslationService } from '../../i18n/translation.service';

describe('CertificateForm', () => {
  let component: CertificateForm;
  let fixture: ComponentFixture<CertificateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateForm],
      providers: [provideHttpClient(), provideHttpClientTesting(), TranslationService],
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
