import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { AboutComponent } from './about/about.component';
import {LayoutComponent} from './layout/layout.component';
import {HomeModule} from './layout/home.module';
import { SectionComponent } from './section/section.component';
import { SectionListComponent } from './section/section-list/section-list.component';
import { SectionDetailsComponent } from './section/section-details/section-details.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AboutComponent,
    LayoutComponent,
    SectionComponent,
    SectionListComponent,
    SectionDetailsComponent,
    LoginComponent
  ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        HomeModule,
        ReactiveFormsModule
    ]
})
export class LayoutModule { }
