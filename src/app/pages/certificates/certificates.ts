import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CertificateItem } from '../../components/certificate-item/certificate-item';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-certificates',
  imports: [CertificateItem, SecondaryButton, RouterLink, TranslatePipe],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class Certificates {}
