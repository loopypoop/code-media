import { Component, OnInit } from '@angular/core';
import {DbService} from '../../service/db.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  articles: any = [];

  constructor(private dbService: DbService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.dbService.getArticles().subscribe(res => {
      let i = 1;
      res.forEach(result => {
        if (i <= 3) {
          this.articles.push(result);
        }
        i++;
      });
    });
  }
}
