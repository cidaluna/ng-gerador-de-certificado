import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { BaseUi } from './components/base-ui/base-ui';
import { Certificate } from './pages/certificate/certificate';
import { CertificateForm } from './pages/certificate-form/certificate-form';

@Component({
  selector: 'app-root',
  imports: [Navbar, BaseUi, Certificate, CertificateForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-gerador-de-certificado');

}
