import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstadisticasDTO } from '../Entidades/estadisticas-dto';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {
 
  private apiUrl = 'http://localhost:8080/estadisticas';  // Cambia esta URL si es necesario

  constructor(private http: HttpClient) { }

  // Método para obtener las estadísticas
  obtenerEstadisticas(): Observable<EstadisticasDTO[]> {
    return this.http.get<EstadisticasDTO[]>(`${this.apiUrl}/documentosDevueltos`);
  }
}
