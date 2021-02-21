import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { NewsComponent } from './news/news.component';
import { HowtoComponent } from './howto/howto.component';
import { ProblemsComponent } from './problems/problems.component';
import { QuestionsComponent } from './questions/questions.component';
import { AboutComponent } from './about/about.component';
import {LayoutComponent} from './layout/layout.component';
import {HomeModule} from './layout/home.module';



@NgModule({
  declarations: [NewsComponent, HowtoComponent, ProblemsComponent, QuestionsComponent, AboutComponent, LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HomeModule,
  ]
})
export class LayoutModule { }
