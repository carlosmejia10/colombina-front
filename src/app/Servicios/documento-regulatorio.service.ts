import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Documento } from "../Entidades/documentacion-tecnica";

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  private apiUrl = "http://localhost:8080/api/documentos";

  constructor(
    private http: HttpClient
  ) {}

  findAll(): Observable<Documento[]> {
    return this.http.get<Documento[]>(this.apiUrl+"/all");
  }

  findById(id: number): Observable<Documento> {
    return this.http.get<Documento>(`${this.apiUrl}/${id}`);
  }

  addDocumento(documento: Documento): Observable<Documento> {
    return this.http.post<Documento>(this.apiUrl+"/add", documento);
  }

  updateDocumento(documento: Documento): Observable<Documento> {
    return this.http.put<Documento>(`${this.apiUrl}/${documento.idDocumento}`, documento);
  }
}
