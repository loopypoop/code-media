import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private httpClient: HttpClient) {}

  getSections(): Observable<any> {
    return this.httpClient.get(`assets/sections.json`);
  }
}
