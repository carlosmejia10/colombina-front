import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { ArchivosDeControlDeTramites } from "../Entidades/archivos-de-control-de-tramites";

@Injectable({
  providedIn: 'root'
})
export class ArchivosDeControlDeTramitesService {
  private apiUrl = "http://localhost:8080/api/archivos-control-tramites";

  constructor(
    private http: HttpClient
  ) {}

  findAll(): Observable<ArchivosDeControlDeTramites[]> {
    return this.http.get<ArchivosDeControlDeTramites[]>(this.apiUrl+"/all");
  }

  findById(id: number): Observable<ArchivosDeControlDeTramites> {
    return this.http.get<ArchivosDeControlDeTramites>(`${this.apiUrl}/${id}`);
  }

  addArchivo(archivo: ArchivosDeControlDeTramites): Observable<ArchivosDeControlDeTramites> {
    return this.http.post<ArchivosDeControlDeTramites>(this.apiUrl+"/add", archivo);
  }

  updateArchivo(archivo: ArchivosDeControlDeTramites): Observable<ArchivosDeControlDeTramites> {
    return this.http.put<ArchivosDeControlDeTramites>(`${this.apiUrl}/${archivo.idRegistro}`, archivo);
  }
}
