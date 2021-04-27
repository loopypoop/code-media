import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LogService} from '../../../service/log.service';
import {DbService} from '../../../service/db.service';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit, OnChanges {

  @Input() sectionType: string;

  articles: any = [];
  news: any = [];

  constructor(private dbService: DbService,
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
    this.dbService.getArticles().subscribe(res => {
      this.articles = [];
      res.forEach(result => {
        if (result.typeCode === this.sectionType) {
          this.articles.push(result);
        }
      });
    });
  }

  getNews(): void {
    this.dbService.getNews().subscribe(res => {
      this.news = res;
    });
  }
}
