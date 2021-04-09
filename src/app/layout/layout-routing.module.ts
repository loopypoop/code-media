import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {AboutComponent} from './about/about.component';
import {SectionComponent} from './section/section.component';
import {SectionDetailsComponent} from './section/section-details/section-details.component';
import {LoginComponent} from './login/login.component';
import {LoginGuard} from './guards/login.guard';
import {ExitLoginGuard} from './guards/exit.login.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'section/:sectionType',
    component: SectionComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [ExitLoginGuard]
  },
  {
    path: 'section/:sectionType/:id',
    component: SectionDetailsComponent
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
  ],
  providers: [ExitLoginGuard]
})
export class LayoutRoutingModule { }
