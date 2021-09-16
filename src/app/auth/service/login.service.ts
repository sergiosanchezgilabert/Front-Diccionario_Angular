import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseUrlBack
  objeto = environment.espanol

  constructor(private http: HttpClient) { }

  getPersona(username: String | null,password:String | null): Observable<any> {
    const url = this.baseUrl + 'persona' + '/?user=' +username+'&password='+password

    if (username !== null && password !== null)
      return this.http.get<any>(url).pipe(delay(3000))
    return EMPTY
  }

  setPersona(name:String|null,surname:String |null, username: String | null,password:String | null): Observable<any> {
    const url = this.baseUrl + 'api/aniadir' + '/?name='+name +'&surname='+surname + '&user='+username+'&password='+password

    if (username !== null && password !== null && name !== null && surname !== null)
      return this.http.get<any>(url)
    return EMPTY
  }
}