import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { CertificateService } from '../../services/certificate';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-certificate',
  imports: [SecondaryButton, RouterLink, TranslatePipe],
  templateUrl: './certificate.html',
  styleUrl: './certificate.scss',
})
export class Certificate implements OnInit {
  constructor(private readonly CertificateService: CertificateService) {}

  ngOnInit(): void {
    console.log(this.CertificateService.certificates);
  }
}
