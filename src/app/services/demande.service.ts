import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Demande } from '../demande/demande';

@Injectable({
    providedIn: 'root'
  })
  export class DemandeService {
    private baseUrl = "http://localhost:8094/demande";

    constructor(private httpClient: HttpClient) { }
  
    getDemandesList(): Observable<Demande[]>{
      return this.httpClient.get<Demande[]> (`${this.baseUrl}`);
    }
  
    createDemande(demande: Demande): Observable<Demande[]> {
      return this.httpClient.post<Demande[]>(`${this.baseUrl}`, demande);
    }
  
    updateDemande(numDemande: number, demande: Demande): Observable<Object> {
      return this.httpClient.put(`${this.baseUrl}/${numDemande}`, demande);
    }
  
    deleteDemande(numDemande: number): Observable<Object> {
      return this.httpClient.delete(`${this.baseUrl}/${numDemande}`);
    }
  
    getDemandeById(numDemande: number) {
      return this.httpClient.get<Demande>("http://localhost:8094/demande/"+numDemande);
    }
  }