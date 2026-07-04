import { Component, inject, signal } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { CertificateService } from '../../services/certificate';
import { LanguageService } from '../../i18n/language.service';
import { FakeApi } from '../../interfaces/certificate.interface';
import { ContentCard } from "../content-card/content-card";

@Component({
  selector: 'app-test-api',
  standalone: true,
  imports: [TranslocoModule, ContentCard],
  templateUrl: './test-api.html',
  styleUrl: './test-api.scss',
})
export class TestApi {
  private readonly api = inject(CertificateService);
  private readonly languageService = inject(LanguageService);

  readonly idiomaAtivo = this.languageService.currentLang;

  readonly certificados = signal<FakeApi[]>([]);
  readonly loading = signal(false);
  readonly erro = signal<string | null>(null);

  buscarCertificadosApi(): void {
    this.loading.set(true);
    this.erro.set(null);
    console.log('Entrou no metodo buscarCerificados fake api')
    this.api.listFakeApi().subscribe({
      next: (dados) => {
        console.log('Dados recebidos:', dados);
        this.certificados.set(dados);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('[testar-api] falha ao buscar certificados:', err);
        this.erro.set('testApi.erroAoBuscar');
        this.loading.set(false);
      },
    });
  }
}
