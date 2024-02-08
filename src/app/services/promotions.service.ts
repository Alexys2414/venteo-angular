import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promotion } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {
  private url = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(`${this.url}/promotions`);
  }

  create(promotion: Promotion): Observable<Promotion> {
    return this.http.post<Promotion>(`${this.url}/promotions`, promotion);
  }

  findById(promotionId: number): Observable<Promotion> {
    return this.http.get<Promotion>(`${this.url}/promotion/${promotionId}`);
  }

  update(promotion: Promotion, promotionId: number): Observable<Promotion>{
    return this.http.put<Promotion>(`${this.url}/promotion/${promotionId}`, promotion);
  }

  delete(promotionId: number): Observable<Promotion>{
    return this.http.delete<Promotion>(`${this.url}/promotion/${promotionId}`);
  }
}