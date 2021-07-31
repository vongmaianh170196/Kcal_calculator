import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import {KcalItem} from '../models/KcalItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  }),
};
@Injectable({
  providedIn: 'root'
})
export class KcalItemService {
  private apiURL:string = "http://localhost:3000/items";
  constructor(private http: HttpClient) { }

  getKcalByDay(): Observable<KcalItem[]>{
    return this.http.get<KcalItem[]>(this.apiURL);
  }

  updateKcalItem(item: KcalItem): Observable<KcalItem>{
    
    const url = `${this.apiURL}/${item.id}`; 
    return this.http.put<KcalItem>(url, item, httpOptions);
  }

  addKcalItem(item:KcalItem): Observable<KcalItem>{
    return this.http.post<KcalItem>(this.apiURL, item, httpOptions);
  }
}
