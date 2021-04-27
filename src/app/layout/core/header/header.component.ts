import { Component, OnInit } from '@angular/core';
import {DbService} from '../../../service/db.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sections: any[];

  constructor(private dbService: DbService) { }

  ngOnInit(): void {
    this.getSections();
  }

  getSections(): void {
    this.dbService.getSections().subscribe(res => {
      this.sections = res;
    });
  }
}
