import { Component } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button";
import { Router } from "@angular/router";

@Component({
  selector: 'app-certificate-item',
  imports: [SecondaryButton],
  templateUrl: './certificate-item.html',
  styleUrl: './certificate-item.scss',
})
export class CertificateItem {
  id: string = '1';

  constructor(private readonly router: Router){}

  redirectCertificate() {
    this.router.navigate(['/certificado', 2]);
  }
}
