import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private url = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.url}/notifications`);
  }
  findAllByUserId(userId: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.url}/notifications?userId=${userId}`);
  }
  saveNotification(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(`${this.url}/notifications`, notification);
  }
  updateNotification(notification: Notification, id: number): Observable<Notification>{
    return this.http.put<Notification>(`${this.url}/notification/${id}`, notification);
  }
  patchNotification(notification: Notification, id: number): Observable<Notification>{
    return this.http.patch<Notification>(`${this.url}/notification/${id}`, notification);
  }
  deleteNotification(id: number): Observable<Notification>{
    return this.http.delete<Notification>(`${this.url}/notification/${id}`);
  }
}
