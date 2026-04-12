import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateItem } from './certificate-item';

describe('CertificateItem', () => {
  let component: CertificateItem;
  let fixture: ComponentFixture<CertificateItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CertificateItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
