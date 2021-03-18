import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../service/article.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  articles: any = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles().subscribe(res => {
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
