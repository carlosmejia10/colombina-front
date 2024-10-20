import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { SeuimientoDelTramite } from "../Entidades/seguimiento";

@Injectable({
  providedIn: 'root'
})
export class SeguimientoTramiteService {
  private apiUrl = "http://localhost:8080/api/seguimientos-tramites";

  constructor(
    private http: HttpClient
  ) {}

  findAll(): Observable<SeuimientoDelTramite[]> {
    return this.http.get<SeuimientoDelTramite[]>(this.apiUrl+"/all");
  }

  findById(id: number): Observable<SeuimientoDelTramite> {
    return this.http.get<SeuimientoDelTramite>(`${this.apiUrl}/${id}`);
  }

  addSeguimiento(seguimiento: SeuimientoDelTramite): Observable<SeuimientoDelTramite> {
    return this.http.post<SeuimientoDelTramite>(this.apiUrl+"/add", seguimiento);
  }

  updateSeguimiento(seguimiento: SeuimientoDelTramite): Observable<SeuimientoDelTramite> {
    return this.http.put<SeuimientoDelTramite>(`${this.apiUrl}/${seguimiento.idSeguimiento}`, seguimiento);
  }
}
