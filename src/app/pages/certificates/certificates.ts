import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CertificateItem } from '../../components/certificate-item/certificate-item';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CertificateItem, SecondaryButton, RouterLink, TranslocoModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class Certificates {}
