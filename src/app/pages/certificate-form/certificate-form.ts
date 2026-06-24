import { Component } from '@angular/core';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { FormsModule, NgControl, NgModel } from '@angular/forms';
import { NgStyle, CommonModule } from '@angular/common';
import { Certificate } from '../../interfaces/certificate.interface';
import { CertificateService } from '../../services/certificate';

@Component({
  selector: 'app-certificate-form',
  imports: [CommonModule, SecondaryButton, PrimaryButton, FormsModule, NgStyle],
  templateUrl: './certificate-form.html',
  styleUrl: './certificate-form.scss',
})
export class CertificateForm {

  constructor(private readonly certificateService: CertificateService){

  }

  course: string = '';
  certificate: Certificate = {
    topics: [],
    name: '',
    date: ''
  };


  validatorField(control: NgControl) {
    return control.invalid && control.touched;
  }

  validatorForm() {
    const valid = (
        this.certificate.topics.length > 0 &&
        this.certificate.name.length > 3 &&
        this.certificate.topics.every(t => t.trim().length > 0) // garante que não há tópico vazio
      );
    return valid;
  }

  addCourse(courseRef: NgModel) {
    const value = this.course.trim();
    if (!value) {
      courseRef.control.markAsTouched(); // mostra erro se tentar adicionar vazio
      return;
    }

    this.certificate.topics.push(value);

    // limpa o campo
    this.course = '';

    // 2. reseta o estado do controle (resolve o bug do "dirty"/touched falso)
    courseRef.control.markAsPristine();
    courseRef.control.markAsUntouched();
  }

  removeCourse(index: number) {
    this.certificate.topics.splice(index, 1);
  }

  submit() {
    if(!this.validatorForm()) return;
    this.certificate.date = this.currentDate();
    this.certificateService.addCertificate(this.certificate);
    console.log(this.certificate);
  }

  currentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(currentDate.getFullYear());

    const formatDate = `${day}/${month}/${year}`;
    return formatDate;
  }
}
