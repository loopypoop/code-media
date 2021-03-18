import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../service/article.service';
import {LogService} from '../../service/log.service';
import {ActivatedRoute} from '@angular/router';
import {SectionService} from '../../service/section.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  sectionType: string;
  section: any;

  constructor(private route: ActivatedRoute,
              private sectionService: SectionService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.sectionType = params['sectionType'];
      this.getSection();
    });
  }

  getSection(): void {
    this.sectionService.getSections().subscribe(res => {
      res.forEach(result => {
        if (result.typeCode === this.sectionType) {
          this.section = result;
        }
      });
    });
  }
}
