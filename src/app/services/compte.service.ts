import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Compte } from '../model/compte';

@Injectable({
  providedIn: 'root',

})
export class CompteService {
  private apiServerUrl = environment.apiBaseUrl ;

  constructor(private http: HttpClient) { }

  public listCompte(): Observable<Compte[]> {
    return this.http.get<Compte[]>(`${this.apiServerUrl}/api/listCompte`);
  }

  public addCompte(compte: Compte): Observable<Compte[]> {
    return this.http.post<Compte[]>(`${this.apiServerUrl}/api/addCompte`, compte);
  }

  public deleteCompte(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/deleteCompteById, ${id}`);
  }

  public updateCompte(compte: Compte): Observable<Compte> {
    return this.http.put<Compte>(`${this.apiServerUrl}/api/updateCompte`, compte);
  }

}
