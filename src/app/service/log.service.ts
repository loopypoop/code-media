import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  public showLog(msg: any) {
    console.log(new Date() + ': ' + JSON.stringify(msg));
  }
}
