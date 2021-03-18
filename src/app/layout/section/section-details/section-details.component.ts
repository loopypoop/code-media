import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../../service/article.service';
import {NewsService} from '../../../service/news.service';

@Component({
  selector: 'app-section-details',
  templateUrl: './section-details.component.html',
  styleUrls: ['./section-details.component.css']
})
export class SectionDetailsComponent implements OnInit {

  sectionType: string;
  id: number;
  article: any;
  newsItem: any;

  constructor(private route: ActivatedRoute,
              private articleService: ArticleService,
              private newsService: NewsService) {
    this.route.params.subscribe(params => {
      this.sectionType = params['sectionType'];
      this.id = parseInt(params['id'], 10);
    });
  }

  ngOnInit(): void {
    this.getContent();
  }

  getContent(): void {
    if (this.sectionType !== 'news') {
      this.articleService.getArticles().subscribe(res => {
        res.forEach(article => {
          if (article.id === this.id) {
            this.article = article;
          }
        });
      });
    } else {
      this.newsService.getNews().subscribe(res => {
        res.forEach(newsItem => {
          if (newsItem.id === this.id) {
            this.newsItem = newsItem;
          }
        });
      });
    }
  }
}
