import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginForm } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "http://localhost:8080/api/v1/authenticate"

  constructor(private http: HttpClient) { }

  authenticate(loginForm: LoginForm): Observable<Object> {
    return this.http.post(this.url, loginForm)
  }
}
