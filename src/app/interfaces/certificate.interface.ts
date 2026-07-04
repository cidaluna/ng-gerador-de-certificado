export interface Certificate {
  name: string;
  topics: string[];
  date: string;
}

export interface FakeApi {
  id: number;
  curso: string;
  cargaHoraria: number;
}

export interface InstitutionCard {
  numero: number;
  titulo: string;
  subtitulo: string;
}
