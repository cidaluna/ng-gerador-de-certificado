import { Component } from '@angular/core';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { PrimaryButton } from "../../components/primary-button/primary-button";

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButton, PrimaryButton],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.scss',
})
export class CertificateForm {}
