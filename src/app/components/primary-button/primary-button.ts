import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.scss',
})
export class PrimaryButton {
  @Input({ required: true }) textButton!: string;
  @Input() disabled: boolean | null = false;
}
