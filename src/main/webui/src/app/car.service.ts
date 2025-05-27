import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get(this.url + '/api/cars', { headers: { Accept: 'application/json' } });
  }
}
