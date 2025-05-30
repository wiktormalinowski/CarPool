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

  deleteCar(id: Number): Observable<any> {
    return this.http.delete(this.url + '/api/cars/'+id, { headers: { Accept: 'application/json' } });
  }

  reserve(id: Number): Observable<any> {
    return this.http.post(this.url + '/api/cars/'+id, { headers: { Accept: 'application/json' } });
  }
}
