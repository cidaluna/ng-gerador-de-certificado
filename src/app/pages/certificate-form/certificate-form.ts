import { Component } from '@angular/core';
import { FormsModule, NgControl, NgModel } from '@angular/forms';
import { CommonModule, NgStyle } from '@angular/common';

import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { PrimaryButton } from '../../components/primary-button/primary-button';
import { Certificate } from '../../interfaces/certificate.interface';
import { CertificateService } from '../../services/certificate';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-certificate-form',
  standalone: true,
  imports: [CommonModule, SecondaryButton, PrimaryButton, FormsModule, NgStyle, TranslocoModule],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.scss',
})
export class CertificateForm {
  constructor(private readonly certificateService: CertificateService) {}

  course = '';
  certificate: Certificate = {
    topics: [],
    name: '',
    date: '',
  };

  validatorField(control: NgControl) {
    return control.invalid && control.touched;
  }

  validatorForm() {
    return (
      this.certificate.topics.length > 0 &&
      this.certificate.name.length > 3 &&
      this.certificate.topics.every((topic) => topic.trim().length > 0)
    );
  }

  addCourse(courseRef: NgModel) {
    const value = this.course.trim();
    if (!value) {
      courseRef.control.markAsTouched();
      return;
    }

    this.certificate.topics.push(value);
    this.course = '';
    courseRef.control.markAsPristine();
    courseRef.control.markAsUntouched();
  }

  removeCourse(index: number) {
    this.certificate.topics.splice(index, 1);
  }

  submit() {
    if (!this.validatorForm()) return;
    this.certificate.date = this.currentDate();
    this.certificateService.addCertificate(this.certificate);
    console.log(this.certificate);
  }

  currentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(currentDate.getFullYear());

    return `${day}/${month}/${year}`;
  }
}
