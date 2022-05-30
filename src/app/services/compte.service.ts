import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Compte } from '../model/compte';

@Injectable({
  providedIn: 'root',

})
export class CompteService {
  //private apiServerUrl = environment.apiBaseUrl ;

  constructor(private http: HttpClient) { }

  public listCompte(): Observable<Compte[]> {
    return this.http.get<Compte[]>(`http://localhost:8094/Compte`);
  }

  public addCompte(compte: Compte): Observable<Compte[]> {
    return this.http.post<Compte[]>(`http://localhost:8094/Compte`, compte);
  }

  public deleteCompte(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8094/Compte`+id);
  }

  public updateCompte(id:number, compte: Compte): Observable<Compte> {
    return this.http.put<Compte>(`http://localhost:8094/Compte`+id, compte);
  }

}
