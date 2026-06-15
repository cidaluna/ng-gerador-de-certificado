import { Component } from '@angular/core';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { FormsModule, NgControl } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-certificate-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, NgStyle],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.scss',
})
export class CertificateForm {
  name: string = '';
  course: string = '';
  topics: string[] = ['Angular', 'React', 'SQL'];

  validatorField(control: NgControl) {
    return control.invalid && control.touched
  }
}
