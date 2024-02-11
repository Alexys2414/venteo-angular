import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterForm, User } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`);
  }

  create(registerForm: RegisterForm): Observable<User> {
    return this.http.post<User>(`${this.url}/users`, registerForm);
  }

  findById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.url}/user/${userId}`);
  }

  update(user: User, userId: number): Observable<User>{
    return this.http.put<User>(`${this.url}/user/${userId}`, user);
  }

  patch(user: User, userId: number): Observable<User>{
    return this.http.patch<User>(`${this.url}/user/${userId}`, user);
  }

  delete(userId: number): Observable<User>{
    return this.http.delete<User>(`${this.url}/user/${userId}`);
  }
}
