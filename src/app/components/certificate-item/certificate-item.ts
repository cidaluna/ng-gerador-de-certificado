import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SecondaryButton } from '../secondary-button/secondary-button';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-certificate-item',
  imports: [SecondaryButton, TranslatePipe],
  templateUrl: './certificate-item.html',
  styleUrl: './certificate-item.scss',
})
export class CertificateItem {
  id = '1';

  constructor(private readonly router: Router) {}

  redirectCertificate() {
    this.router.navigate(['/certificado', 2]);
  }
}
