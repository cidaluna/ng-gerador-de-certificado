import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Certificate } from './certificate';
import { TranslationService } from '../../i18n/translation.service';

describe('Certificate', () => {
  let component: Certificate;
  let fixture: ComponentFixture<Certificate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Certificate],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting(), TranslationService],
    }).compileComponents();

    fixture = TestBed.createComponent(Certificate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
