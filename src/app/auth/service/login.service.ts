import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { JwtResponse } from '../models/jwt-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.baseUrlBack

  token: string

  constructor(private http: HttpClient) { }

  getPersona(username: String | null,password:String | null): Observable<any> {
    const url = this.baseUrl + 'persona' + '/?user=' +username+'&password='+password
    console.log(url)

    if (username !== null && password !== null)
      return this.http.get<JwtResponse>(url).pipe(tap((res:JwtResponse)=>{
        console.log(res.accessToken)
        if(res){
          this.saveToken(res.accessToken,res.expiresIn)
        }
      }))
    return EMPTY
  }

  setPersona(name:String|null,surname:String |null, username: String | null,password:String | null): Observable<JwtResponse> {
    const url = this.baseUrl + 'api/aniadir' + '/?name='+name +'&surname='+surname + '&user='+username+'&password='+password

    if (username !== null && password !== null && name !== null && surname !== null)
      return this.http.get<JwtResponse>(url).pipe(tap((res:JwtResponse)=>{
        if(res){
          this.saveToken(res.accessToken,res.expiresIn)
        }
      }))
    return EMPTY
  }
  getPersonaGoogle(user:any){
    this.saveToken(user.idToken,'18000')
  }

  logout(){
    this.token=''
    localStorage.removeItem("ACCESS_TOKEN")
    localStorage.removeItem("EXPIRES_IN")
  }

  saveToken(token:string, expiresIn:string):void{
    localStorage.setItem("ACCESS_TOKEN",  token)
    localStorage.setItem("EXPIRES_IN",  expiresIn)
    this.token=token
  }

  getToken():string{
    if(!this.token){
      this.token=localStorage.getItem("ACCESS_TOKEN") || ''
    }
    return this.token
  }
}