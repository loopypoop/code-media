import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LastArticlesComponent} from './last-articles/last-articles.component';
import {LastPublicationsComponent} from './last-publications/last-publications.component';
import {RouterModule} from '@angular/router';
import {SortByDatePipe} from '../../pipes/sort-by-date.pipe';



@NgModule({
  declarations: [
    LastArticlesComponent,
    LastPublicationsComponent,
    SortByDatePipe
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [
    LastPublicationsComponent,
    LastArticlesComponent
  ]
})
export class HomeModule { }
