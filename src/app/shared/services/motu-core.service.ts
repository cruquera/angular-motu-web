import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MotuCoreService {
  //Natura MOTU core API URL
  private readonly url = 'https://motu.azurewebsites.net';

  constructor(private http: HttpClient) {}

  public obterRecomendacoesUsuario(
    idUsuario: number
  ): Observable<RecommendationResponse[]> {
    return this.http.get<RecommendationResponse[]>(
      `${this.url}/getRelatedProducts?id=${idUsuario}`
    );
  }
}

interface RecommendationResponse {
  notas: number;
  product: string;
  generos: string;
}
