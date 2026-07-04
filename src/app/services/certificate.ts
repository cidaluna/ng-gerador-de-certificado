import { inject, Injectable } from '@angular/core';
import { Certificate, FakeApi, InstitutionCard } from '../interfaces/certificate.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  certificates: Certificate[] = [];
  private readonly http = inject(HttpClient);

  constructor(){}

  addCertificate(certificate: Certificate) {
    this.certificates.push(certificate);
    console.log(this.certificates);
  }

  listFakeApi(): Observable<FakeApi[]> {
    return this.http.get<FakeApi[]>('http://localhost:3000/certificados');
  }

  listInstitutonCard(): Observable<InstitutionCard[]> {
    return this.http.get<InstitutionCard[]>('http://localhost:3000/cards');
  }
}
