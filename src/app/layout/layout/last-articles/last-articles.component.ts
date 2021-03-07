import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-last-articles',
  templateUrl: './last-articles.component.html',
  styleUrls: ['./last-articles.component.css']
})
export class LastArticlesComponent implements OnInit {

  difficulty: string;
  articles: any = [];

  constructor(
              private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.difficulty = 'hard';
    this.httpClient.get('assets/articles.json').subscribe(res => {
      this.articles = res;
      console.log(this.articles);
    });
  }

  // allArticles() {
  //   this.articleService.getArticles().subscribe(res => {
  //     this.articles = res.data;
  //     console.log('this.articles');
  //     console.log(this.articles);
  //   });
  // }
}
