import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  constructor(private http: HttpClient) { }

  getIssueList(): Observable<Issue>{
    return this.http.get<Issue>(`http://localhost/api/v1/issues`);
  }

}
