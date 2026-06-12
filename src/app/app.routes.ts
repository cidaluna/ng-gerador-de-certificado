import { Routes } from '@angular/router';
import { Certificate } from './pages/certificate/certificate';
import { Certificates } from './pages/certificates/certificates';
import { CertificateForm } from './pages/certificate-form/certificate-form';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'certificados',
    pathMatch: 'full'
  },
  {
    path: 'certificados',
    component: Certificates
  },
  {
    path: 'certificados/novo',
    component: CertificateForm
  },
  {
    path: 'certificado/:id',
    component: Certificate
  }
];
