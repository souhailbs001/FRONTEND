import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Credit } from '../model/credit';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root', 
  })
  export class CreditService {
    private readonly apiServerUrl = environment.apiBaseUrlEngagement ;
    constructor(private http: HttpClient) { }

    public listCredit(): Observable<Credit[]> {
        return this.http.get<Credit[]>(this.apiServerUrl+`/ListCredit`);
      }

      

  }