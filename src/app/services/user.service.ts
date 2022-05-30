import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';



const API_URL = 'http://localhost:8081/api/test/';
//const baseURL = 'http://localhost:8081//api/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //baseURL = 'http://localhost:8081//api/auth';
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'parent', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

}

