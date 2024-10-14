import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { ExpedienteRegulatorio } from "../Entidades/expediente-regulatorio";

@Injectable({
  providedIn: 'root'
})
export class ExpedienteRegulatorioService {
  private apiUrl = "http://localhost:8080/api/expedientes-regulatorios";

  constructor(
    private http: HttpClient
  ) {}

  findAll(): Observable<ExpedienteRegulatorio[]> {
    return this.http.get<ExpedienteRegulatorio[]>(this.apiUrl+"/all");
  }

  findById(id: number): Observable<ExpedienteRegulatorio> {
    return this.http.get<ExpedienteRegulatorio>(`${this.apiUrl}/${id}`);
  }

  addExpediente(expediente: ExpedienteRegulatorio): Observable<ExpedienteRegulatorio> {
    return this.http.post<ExpedienteRegulatorio>(this.apiUrl+"/add", expediente);
  }

  updateExpediente(expediente: ExpedienteRegulatorio): Observable<ExpedienteRegulatorio> {
    return this.http.put<ExpedienteRegulatorio>(`${this.apiUrl}/${expediente.idExpediente}`, expediente);
  }
}
