import { Injectable } from '@angular/core';
import { Certificate } from '../interfaces/certificate.interface';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  certificates: Certificate[] = [];

  constructor(){}

  addCertificate(certificate: Certificate) {
    this.certificates.push(certificate);
    console.log(this.certificates);
  }
}
