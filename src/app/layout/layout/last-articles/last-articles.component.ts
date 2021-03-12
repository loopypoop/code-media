import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../../service/article.service';
import {LogService} from '../../../service/log.service';

@Component({
  selector: 'app-last-articles',
  templateUrl: './last-articles.component.html',
  styleUrls: ['./last-articles.component.css']
})
export class LastArticlesComponent implements OnInit {

  articles: any = [];

  constructor(private articleService: ArticleService,
              private logService: LogService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(res => {
      this.articles = res;
      this.logService.showLog(this.articles);
    });
  }
}
