import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8090/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username:string,firstName:string,lastName:string,phone:number, email:string,adress:string, password:string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      firstName,
      lastName,
      phone,
      email,
      adress,
      password,
    }, httpOptions);
  }
}