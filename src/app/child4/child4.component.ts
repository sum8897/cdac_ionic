import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.scss'],
})
export class Child4Component  implements OnInit {
@Input() dataFromChild:any='';
@Output() sendDataFromChild = new EventEmitter<any>();
username:any='CDAC NOida';
obj:any={
  id: 1,
  name: 'CDAC Noida',
  location: 'Sec 62 UP'
}

  constructor() { }


  ngOnInit() {}
  sendChildToParent(){
  this.sendDataFromChild.emit(this.obj);
  }
}
