import { Component } from '@angular/core';
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { CertificateItem } from "../../components/certificate-item/certificate-item";

@Component({
  selector: 'app-certificates',
  imports: [SecondaryButton, CertificateItem],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class Certificates {}
