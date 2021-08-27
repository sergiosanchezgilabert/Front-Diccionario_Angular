import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Espanol } from '../../domain/IEspanol';

@Injectable({
  providedIn: 'root'
})
export class EspanolService {

  baseUrl = environment.baseUrl
  objeto = environment.espanol

  constructor(private http: HttpClient) {
    console.log('personas services listo')
  }

  cargarTodos(): Observable<Array<Espanol>> {
    const url = this.baseUrl + this.objeto;

    return this.http.get<Array<Espanol>>(url)
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

    console.log(url)

    return this.http.delete(url);
  }
  /*
    getPersona(id: string | null): Observable<ResponsePersona> {
  
      const url = this.baseUrl + this.objeto + id;
  
      return this.http.get<ResponsePersona>(url);
    }
  
    eliminarPersona(id: number): Observable<Object> {
  
      const url = this.baseUrl + this.objeto + id;
  
      return this.http.delete(url);
    }
  
    aniadirPersona(persona: []): Observable<Object> {
  
      const url = this.baseUrl + this.objeto;
  
      return this.http.post(url, persona);
  
    }
  
    editarPersona(persona: [], id: number): Observable<Object> {
  
      const url = this.baseUrl + this.objeto + id;
  
      return this.http.put(url, persona);
    }*/
}