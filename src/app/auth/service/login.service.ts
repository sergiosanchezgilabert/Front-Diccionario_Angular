import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseUrl
  objeto = environment.espanol

  constructor(private http: HttpClient) { }

  getPersona(username: String | null,password:String | null): Observable<any> {
    const url = 'http://localhost:8000/' + 'persona' + '/?user=' +username+'&password='+password

    if (username !== null && password !== null)
      return this.http.get<any>(url)
    return EMPTY
  }
}