import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../../service/news.service';
import {LogService} from '../../../service/log.service';

@Component({
  selector: 'app-last-publications',
  templateUrl: './last-publications.component.html',
  styleUrls: ['./last-publications.component.css']
})
export class LastPublicationsComponent implements OnInit {

  difficulty: string;
  news: any = [];

  constructor(private newsService: NewsService,
              private logService: LogService) { }

  ngOnInit(): void {
    this.difficulty = 'hard';
    this.newsService.getNews().subscribe(res => {
      this.news = res;
      this.logService.showLog(this.news);
    });
  }

}
