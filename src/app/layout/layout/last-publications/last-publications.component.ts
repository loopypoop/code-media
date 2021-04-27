import { Component, OnInit } from '@angular/core';
import {LogService} from '../../../service/log.service';
import {DbService} from '../../../service/db.service';

@Component({
  selector: 'app-last-publications',
  templateUrl: './last-publications.component.html',
  styleUrls: ['./last-publications.component.css']
})
export class LastPublicationsComponent implements OnInit {

  difficulty: string;
  news: any = [];
  articles: any[];
  lastArticle: any;

  constructor(private dbService: DbService,
              private logService: LogService) { }

  ngOnInit(): void {
    this.dbService.getNews().subscribe(res => {
      let i = 0;
      res.forEach(result => {
        if (i < 3) {
          this.news.push(result);
        }
        i++;
      });
      // this.logService.showLog(this.news);
    });
    this.getLastArticle();
  }

  getLastArticle(): any {
    this.dbService.getArticles().subscribe(res => {
      this.articles = res;
      this.articles.forEach(article => {
        if (article.id === 1) {
          this.lastArticle = article;
        }
      });
      console.log('this.lastArticle');
      console.log(this.lastArticle);
    });
  }

}
