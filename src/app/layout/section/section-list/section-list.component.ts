import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ArticleService} from '../../../service/article.service';
import {LogService} from '../../../service/log.service';
import {NewsService} from '../../../service/news.service';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit, OnChanges {

  @Input() sectionType: string;

  articles: any = [];
  news: any = [];

  constructor(private articleService: ArticleService,
              private newsService: NewsService,
              private logService: LogService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sectionType !== 'news') {
      this.getArticles();
    } else {
      this.getNews();
    }
  }

  getArticles(): void {
    this.articleService.getArticles().subscribe(res => {
      this.articles = [];
      res.forEach(result => {
        if (result.typeCode === this.sectionType) {
          this.articles.push(result);
        }
      });
    });
  }

  getNews(): void {
    this.newsService.getNews().subscribe(res => {
      this.news = res;
    });
  }
}
