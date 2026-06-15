import { Component } from '@angular/core';
import { CertificateItem } from "../../components/certificate-item/certificate-item";
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-certificates',
  imports: [CertificateItem, SecondaryButton, RouterLink],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class Certificates {}
