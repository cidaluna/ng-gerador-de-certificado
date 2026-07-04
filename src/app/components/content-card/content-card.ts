import { Component, inject, signal } from '@angular/core';
import { InstitutionCard } from '../../interfaces/certificate.interface';
import { CertificateService } from '../../services/certificate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-card',
  imports: [CommonModule],
  templateUrl: './content-card.html',
  styleUrl: './content-card.scss',
})
export class ContentCard {
  private readonly institutionService = inject(CertificateService);

  readonly cards = signal<InstitutionCard[]>([]);
  readonly selectedNumero = signal<number | null>(null);

  constructor() {
    this.institutionService.listInstitutonCard().subscribe((cards) => this.cards.set(cards));
  }

  onSelect(card: InstitutionCard): void {
    this.selectedNumero.set(card.numero);
  }
}
