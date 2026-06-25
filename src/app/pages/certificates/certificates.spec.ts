import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Certificates } from './certificates';
import { TranslationService } from '../../i18n/translation.service';

describe('Certificates', () => {
  let component: Certificates;
  let fixture: ComponentFixture<Certificates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Certificates],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting(), TranslationService],
    }).compileComponents();

    fixture = TestBed.createComponent(Certificates);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
