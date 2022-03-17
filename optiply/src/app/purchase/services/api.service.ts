import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { APICallback } from '../models';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  private readonly BASE_URL = "https://api2.binance.com/api/v3/ticker/24hr";

  constructor(private http: HttpClient) { }

  dataCallback(): Observable<APICallback[]> {
    return this.http.get<APICallback[]>(this.BASE_URL);
  }

}
