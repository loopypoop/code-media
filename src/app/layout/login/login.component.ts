import { Component, OnInit } from '@angular/core';
import {ComponentCanDeactivate} from '../guards/exit.login.guard';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, ComponentCanDeactivate {

  saved = false;

  loginForm: FormGroup;

  // loginForm = new FormGroup({
  //   email: new FormControl('', [Validators.email, Validators.required]),
  //   password: new FormControl('', Validators.required),
  //   rememberMe: new FormControl('')
  // });

  // tslint:disable-next-line:typedef
  // get email() {
  //   return this.loginForm.get('email');
  // }
  //
  // tslint:disable-next-line:typedef
  // get password() {
  //   return this.loginForm.get('password');
  // }

  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  save(): void {
    if (this.loginForm.valid) {
      this.saved = true;
      console.log('this.loginForm.value');
      console.log(this.loginForm.value);
    }
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.saved){
      return confirm('bye?');
    } else {
      return true;
    }
  }
}
