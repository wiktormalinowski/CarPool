import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getCurrentUser(): Observable<any> {
    return this.http.get(this.url+'/api/user/me', { withCredentials: true });
  }

  login(username: string, password: string): Observable<any> {
    const body = new HttpParams()
      .set('j_username', username)
      .set('j_password', password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(this.url+'j_security_check', body.toString(), { headers, observe: 'response', withCredentials: true });
  }
}
