import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component  implements OnInit,OnDestroy {
@Input() username:any='';
  constructor() { }

  ngOnInit() {}

  ionViewWillEnter(){
console.log(this.username)
  }
  ngOnDestroy(): void {
    
  }

}
