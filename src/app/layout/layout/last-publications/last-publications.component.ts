import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../service/news.service';
import {LogService} from '../../../service/log.service';
import {ArticleService} from '../../../service/article.service';

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

  constructor(private newsService: NewsService,
              private logService: LogService,
              private articleService: ArticleService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(res => {
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
    this.articleService.getArticles().subscribe(res => {
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
