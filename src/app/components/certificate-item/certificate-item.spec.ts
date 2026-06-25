import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CertificateItem } from './certificate-item';
import { TranslationService } from '../../i18n/translation.service';

describe('CertificateItem', () => {
  let component: CertificateItem;
  let fixture: ComponentFixture<CertificateItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateItem],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting(), TranslationService],
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
