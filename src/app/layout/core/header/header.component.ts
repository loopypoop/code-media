import { Component, OnInit } from '@angular/core';
import {SectionService} from '../../../service/section.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sections: any[];

  constructor(private sectionService: SectionService) { }

  ngOnInit(): void {
    this.getSections();
  }

  getSections(): void {
    this.sectionService.getSections().subscribe(res => {
      this.sections = res;
    });
  }
}
