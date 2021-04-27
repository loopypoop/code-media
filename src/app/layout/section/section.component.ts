import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DbService} from '../../service/db.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  sectionType: string;
  section: any;

  constructor(private route: ActivatedRoute,
              private dbService: DbService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.sectionType = params['sectionType'];
      this.getSection();
    });
  }

  getSection(): void {
    this.dbService.getSections().subscribe(res => {
      res.forEach(result => {
        if (result.typeCode === this.sectionType) {
          this.section = result;
        }
      });
    });
  }
}
