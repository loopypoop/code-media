import { Component, OnInit } from '@angular/core';
import {LogService} from '../../../service/log.service';
import {DbService} from '../../../service/db.service';

@Component({
  selector: 'app-last-articles',
  templateUrl: './last-articles.component.html',
  styleUrls: ['./last-articles.component.css']
})
export class LastArticlesComponent implements OnInit {

  articles: any[];

  constructor(private dbService: DbService,
              private logService: LogService) { }

  ngOnInit(): void {
    this.dbService.getArticles().subscribe(res => {
      this.articles = res;
      this.articles.shift();
      // this.logService.showLog(this.articles);
    });
  }
}
