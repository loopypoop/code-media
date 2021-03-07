import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  constructor(private http: HttpClient) {
  }

  getArticles(): Observable<any> {
    return this.http.get('assets/articles.json');
  }
}
