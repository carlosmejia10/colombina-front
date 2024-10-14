import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { AsuntosRegulatorios } from "../Entidades/asuntos-regulatorios";

@Injectable({
  providedIn: 'root'
})
export class AsuntosRegulatoriosService {
  private apiUrl = "http://localhost:8080/api/asuntos-regulatorios";

  constructor(
    private http: HttpClient
  ) {}

  findAll(): Observable<AsuntosRegulatorios[]> {
    return this.http.get<AsuntosRegulatorios[]>(this.apiUrl+"/all");
  }

  findById(id: number): Observable<AsuntosRegulatorios> {
    return this.http.get<AsuntosRegulatorios>(`${this.apiUrl}/${id}`);
  }

  addAsunto(asunto: AsuntosRegulatorios): Observable<AsuntosRegulatorios> {
    return this.http.post<AsuntosRegulatorios>(this.apiUrl+"/add", asunto);
  }

  updateAsunto(asunto: AsuntosRegulatorios): Observable<AsuntosRegulatorios> {
    return this.http.put<AsuntosRegulatorios>(`${this.apiUrl}/${asunto.idAsunto}`, asunto);
  }
}
