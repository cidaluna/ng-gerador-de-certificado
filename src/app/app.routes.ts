import { Routes } from '@angular/router';
import { Certificates } from './pages/certificates/certificates';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'certificates',
    pathMatch: 'full'
  },
  {
    path: 'certificates',
    component: Certificates
  }
];
