import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {NewsComponent} from './news/news.component';
import {HowtoComponent} from './howto/howto.component';
import {ProblemsComponent} from './problems/problems.component';
import {QuestionsComponent} from './questions/questions.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'howto',
    component: HowtoComponent
  },
  {
    path: 'zadacha',
    component: ProblemsComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
  // {
  //   path: '**',
  //   component: ErrorPageComponent
  // }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule { }
