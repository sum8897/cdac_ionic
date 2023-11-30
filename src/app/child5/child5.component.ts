import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.scss'],
})
export class Child5Component  implements OnInit {
@Input() firstName:any='';

@Output() lastName= new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

  }
  objData=[
    {
      id:1,
      name:'Monti',
      Skills: 'Java Node React'
    },
    {
      id:2,
      name:'Nandani',
      Skills: 'Java'
    }
  ]
 
sendDataFromChildByClick(){

  this.lastName.emit(this.objData);
}
}
