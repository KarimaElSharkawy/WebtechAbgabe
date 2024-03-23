import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eintraege } from './eintraege';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  backendUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAllEntries(): Observable<Eintraege[]> {
    return this.http.get<Eintraege[]>(`${this.backendUrl}/entries`);
  }

  createOneEntry(eintrag: Eintraege): Observable<Eintraege> {
    return this.http.post<Eintraege>(`${this.backendUrl}/addEntry`, eintrag);
  }

  deleteEntry(id: number): Observable<any> {
    return this.http.delete(`${this.backendUrl}/entries/${id}`);
  }
  
  updateEntry(id: number, entry: Eintraege): Observable<any> {
    return this.http.put(`${this.backendUrl}/entries/${id}`, entry);
  }
}