import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/categories`);
  }

  create(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.url}/categories`, category);
  }

  findById(categoryId: number): Observable<Category> {
    return this.http.get<Category>(`${this.url}/category/${categoryId}`);
  }

  update(category: Category, categoryId: number): Observable<Category>{
    return this.http.put<Category>(`${this.url}/categories/${categoryId}`, category);
  }

  delete(categoryId: number): Observable<Category>{
    return this.http.delete<Category>(`${this.url}/categories/${categoryId}`);
  }

  findAuctionsByCategoryId(categoryId: number): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/categories/${categoryId}/auctions`);
  }
}