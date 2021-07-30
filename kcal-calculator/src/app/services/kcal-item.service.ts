import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

import {KcalItem} from '../models/KcalItem';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KcalItemService {
  private apiURL:string = "http://localhost:3000/items";
  constructor(private http: HttpClient) { }

  getKcalByDay(): Observable<KcalItem[]>{
    return this.http.get<KcalItem[]>(this.apiURL);
  }

}
