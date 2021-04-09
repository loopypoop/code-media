import { Component, OnInit } from '@angular/core';
import {ComponentCanDeactivate} from '../guards/exit.login.guard';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, ComponentCanDeactivate {

  saved = false;
  save(): void {
    this.saved = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved){
      return confirm('bye?');
    } else {
      return true;
    }
  }
}
