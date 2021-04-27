import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get('http://localhost:4200/last-news');
  }

  getSections(): Observable<any> {
    return this.http.get(`http://localhost:4200/sections`);
  }

  getArticles(): Observable<any> {
    return this.http.get('http://localhost:4200/last-articles');
  }
}
