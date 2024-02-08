import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private url = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${this.url}/issues`);
  }

  saveIssue(issue: Issue): Observable<Issue> {
    return this.http.post<Issue>(`${this.url}/issues/save`, issue);
  }

  updateIssue(issue: Issue, issueId: number): Observable<Issue> {
    return this.http.put<Issue>(`${this.url}/issues/update/${issueId}`, issue);
  }

  patchIssue(issue: Issue, issueId: number): Observable<Issue> {
    return this.http.patch<Issue>(`${this.url}/issues/update/${issueId}`, issue);
  }

  deleteIssue(issueId: number):Observable<Issue> {
    return this.http.delete<Issue>(`${this.url}/issues/delete/${issueId}`);
  }

}
