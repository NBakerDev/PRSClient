import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { RequestLine } from '../requestline/requestline.class'
import { Request } from '../request/request.class';




const baseUrl = "http://localhost:55555/api/requestlines";

@Injectable({
  providedIn: 'root'
})
export class RequestlinesService {
  list(): Observable <RequestLine[]> {
    return this.http.get(`${baseUrl}`) as Observable <RequestLine[]>;
  }
  get(id: string): Observable<RequestLine>{
    return this.http.get(`${baseUrl}/${id}`) as Observable<RequestLine>;
  }

  create(requestline: RequestLine): Observable<any> {
    return this.http.post(`${baseUrl}`, requestline) as Observable<any>;
  }
  change(requestline: RequestLine): Observable<any> {
    return this.http.put(`${baseUrl}/${requestline.id}`, requestline) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`) as Observable<any>;
  }

  constructor(private http: HttpClient) { }
}