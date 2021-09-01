import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Ingles } from '../../domain/I-Ingles';
import { InglesWeb } from '../../domain/I-InglesWeb';

@Injectable({
  providedIn: 'root'
})
export class InglesService {

  baseUrl = environment.baseUrl
  objeto = environment.ingles

  constructor(private http: HttpClient) { }

  cargarTodos(): Observable<Array<InglesWeb>> {
    const url = this.baseUrl + this.objeto;

    return this.http.get<Array<InglesWeb>>(url)
  }

  aniadir(palabra: Ingles): Observable<Object> {

    const url = this.baseUrl + this.objeto

    return this.http.post(url, palabra)
  }

  editar(ingles: Ingles): Observable<Object> {

    const url = this.baseUrl + this.objeto + ingles.palabra

    console.log('URL ' + url)

    return this.http.put(url, ingles)
  }

  borrar(palabra: string): Observable<Object> {

    const url = this.baseUrl + this.objeto + palabra

    console.log(url)

    return this.http.delete(url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'text'
    })
  }

  getPalabra(palabra: string | null): Observable<InglesWeb> {
    const url = this.baseUrl + this.objeto + palabra

    return this.http.get<InglesWeb>(url)
  }
}