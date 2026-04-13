import { Component } from '@angular/core';
import { CertificateItem } from "../../components/certificate-item/certificate-item";

@Component({
  selector: 'app-certificates',
  imports: [CertificateItem],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class Certificates {}
