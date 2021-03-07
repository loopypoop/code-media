import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-publications',
  templateUrl: './last-publications.component.html',
  styleUrls: ['./last-publications.component.css']
})
export class LastPublicationsComponent implements OnInit {

  difficulty: string;

  constructor() { }

  ngOnInit(): void {
    this.difficulty = 'hard';
  }

}
