import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent  implements OnInit {
@Input() firstname:any;
@Input() firstname2:any;
  constructor() {
    console.log(this.firstname)
   }

  ngOnInit() {}


}
