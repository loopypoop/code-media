import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-last-publications',
  templateUrl: './last-publications.component.html',
  styleUrls: ['./last-publications.component.css']
})
export class LastPublicationsComponent implements OnInit {

  difficulty: string;
  news: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.difficulty = 'hard';
    this.httpClient.get('assets/last-news.json').subscribe(res => {
      this.news = res;
    });
  }

}
