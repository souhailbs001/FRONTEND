import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl ;
  requestHeader = new HttpHeaders(
    {"No-Auth" :"true"}
  );


  constructor(private httpClient: HttpClient ) { }

  public login(loginData) {
    return this.httpClient.post(`${this.apiServerUrl}/api/login` , loginData , {headers : this.requestHeader});
    
  }
}
