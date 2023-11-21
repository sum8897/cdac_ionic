import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {
  username:any='Monti';
  age='34';
  constructor() { }

  userObj={
    id:1,
    name:'test',
    age:'12',
    address:'CDAC Noida Sec 62'
  }
}
