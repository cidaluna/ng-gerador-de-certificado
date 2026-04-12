import { Routes } from '@angular/router';
import { Certificates } from './pages/certificates/certificates';
import { CertificateForm } from './pages/certificate-form/certificate-form';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'certificates',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '',
  //   component: Certificates
  // },
  {
    path: '',
    component: CertificateForm
  }
];
