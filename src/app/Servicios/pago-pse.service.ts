import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { PagoPSE } from "../Entidades/pago-pse";

@Injectable({
  providedIn: 'root'
})
export class PagoPSEService {
  private apiUrl = "http://localhost:8080/api/pagos-pse";

  constructor(
    private http: HttpClient
  ) {}

  findAll(): Observable<PagoPSE[]> {
    return this.http.get<PagoPSE[]>(this.apiUrl+"/all");
  }

  findById(id: number): Observable<PagoPSE> {
    return this.http.get<PagoPSE>(`${this.apiUrl}/${id}`);
  }

  addPago(pago: PagoPSE): Observable<PagoPSE> {
    return this.http.post<PagoPSE>(this.apiUrl+"/add", pago);
  }

  updatePago(pago: PagoPSE): Observable<PagoPSE> {
    return this.http.put<PagoPSE>(`${this.apiUrl}/${pago.idPago}`, pago);
  }
}
