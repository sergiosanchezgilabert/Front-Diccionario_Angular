import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Espanol } from '../../domain/IEspanol';
import { EspanolWeb } from '../../domain/IEspanolWeb';

@Injectable({
  providedIn: 'root'
})
export class EspanolService {

  baseUrl = environment.baseUrl
  objeto = environment.espanol

  constructor(private http: HttpClient) { }

  cargarTodos(): Observable<Array<EspanolWeb>> {
    const url = this.baseUrl + this.objeto;

    return this.http.get<Array<EspanolWeb>>(url)
  }

  aniadir(palabra: Espanol): Observable<Object> {

    if (palabra.palabra === '') {
      return EMPTY
    }

    const url = this.baseUrl + this.objeto

    return this.http.post(url, palabra)

  }

  editar(espanol: Espanol): Observable<Object> {

    const url = this.baseUrl + this.objeto + espanol.palabra

    return this.http.put(url, espanol)
  }

  borrar(palabra: string): Observable<Object> {

    const url = this.baseUrl + this.objeto + palabra;

    return this.http.delete(url)
  }

  getPalabra(palabra: string | null): Observable<EspanolWeb> {
    const url = this.baseUrl + this.objeto + palabra

    if (palabra !== null)
      return this.http.get<EspanolWeb>(url)
    return EMPTY
  }
}