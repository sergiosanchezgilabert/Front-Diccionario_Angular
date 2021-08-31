import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Espanol } from '../../domain/IEspanol';
import { EspanolWeb } from '../../domain/IEspanolWeb';

@Injectable({
  providedIn: 'root'
})
export class EspanolService {

  baseUrl = environment.baseUrl
  objeto = environment.espanol

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");
  }

  constructor(private http: HttpClient) {
    console.log('personas services listo')
  }

  cargarTodos(): Observable<Array<EspanolWeb>> {
    const url = this.baseUrl + this.objeto;

    return this.http.get<Array<EspanolWeb>>(url)
  }

  aniadir(palabra: Espanol): Observable<Object> {

    const url = this.baseUrl + this.objeto

    return this.http.post(url, palabra)

  }

  editar(espanol: Espanol): Observable<Object> {

    const url = this.baseUrl + this.objeto + espanol.palabra

    return this.http.put(url, espanol);
  }

  borrar(palabra: string): Observable<Object> {

    const url = this.baseUrl + this.objeto + palabra;

    return this.http.delete(url);
  }

  getPalabra(palabra:string | null):Observable<EspanolWeb>{
    const url = this.baseUrl + this.objeto + palabra

    return this.http.get<EspanolWeb>(url).pipe(catchError(this.errorHandler))
  }
}