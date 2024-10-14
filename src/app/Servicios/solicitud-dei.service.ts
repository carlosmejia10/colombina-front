import { HttpClient } from "@angular/common/http";
import { SolicitudDEI } from "../Entidades/solicitud-dei";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudDEIService {
  private apiUrl = "http://localhost:8080/api/solicitudes-dei";

  constructor(
    private http: HttpClient
  ) {}

  findAll(): Observable<SolicitudDEI[]> {
    return this.http.get<SolicitudDEI[]>(this.apiUrl+"/all");
  }

  findById(id: number): Observable<SolicitudDEI> {
    return this.http.get<SolicitudDEI>(`${this.apiUrl}/${id}`);
  }

  addSolicitudDEI(solicitudDEI: SolicitudDEI): Observable<SolicitudDEI> {
    return this.http.post<SolicitudDEI>(this.apiUrl+"/add", solicitudDEI);
  }

  updateSolicitudDEI(solicitudDEI: SolicitudDEI): Observable<SolicitudDEI> {
    return this.http.put<SolicitudDEI>(`${this.apiUrl}/${solicitudDEI.idSolicitud}`, solicitudDEI);
  }
}
