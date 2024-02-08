import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auction } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class AuctionsService {

  url = 'http://localhost:8080/api/v1'

  constructor(private http: HttpClient) { }

  getAuctions(): Observable<Auction[]> {
    return this.http.get<Auction[]>(`${this.url}/auctions`)
  }

  postAuction(auction: Auction): Observable<Auction> {
    return this.http.post<Auction>(`${this.url}/auctions`, auction)
  }

  getAuction(id: number): Observable<Auction> {
    return this.http.get<Auction>(`${this.url}/auction/${id}`)
  }

  putAuction(auction: Auction): Observable<Auction> {
    return this.http.put<Auction>(`${this.url}/auction/${auction.auctionId}`, auction)
  }

  deleteAuction(id: number): Observable<any> {
    return this.http.delete(`${this.url}/auction/${id}`)
  }
}
