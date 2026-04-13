import { Routes } from '@angular/router';
import { Certificate } from './pages/certificate/certificate';

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
    component: Certificate
  }
];
