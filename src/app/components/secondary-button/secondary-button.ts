import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secondary-button.html',
  styleUrl: './secondary-button.scss',
})
export class SecondaryButton {
  @Input({ required: true }) textButton!: string;
  @Input() iconPhClass!: string;
  @Input() disabled: boolean = false;
}
