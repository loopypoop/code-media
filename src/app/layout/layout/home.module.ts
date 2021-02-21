import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LastArticlesComponent} from './last-articles/last-articles.component';
import {LastPublicationsComponent} from './last-publications/last-publications.component';



@NgModule({
  declarations: [
    LastArticlesComponent,
    LastPublicationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LastPublicationsComponent,
    LastArticlesComponent
  ]
})
export class HomeModule { }
