import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from '../services/global-variable.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  today: any = 'demo test';

  name: any = 'ashish ';
  firstname: any = 'monti cdac';

  hidetext: boolean = true;
  ngOnInit(): void {
    this.globalAccess();
  }
  constructor(public router: Router,
    public gv: GlobalVariableService) {
    this.username = this.userDetails.name;
    console.log(this.gv.userObj);
  }
  onHomeRoute() {
    console.log('gsg')
    this.router.navigate(['/profile']);
    // this.router.navigateByUrl('./profile');
  }
  onTemplateClick() {
    this.router.navigateByUrl('/template');
  }
  onReactiveClick() {
    this.router.navigateByUrl('/reactive-form');
  }
  cardClick(data: any) {

    console.log(data);
    alert(data)
  }

  globalAccess() {

    const uuuuu = this.gv.username;
    console.log(this.gv.username);
  }
  dataget() {
    console.log(this.username)
  }
  username: any = '';

  userDetails = {
    name: 'MOnti cdac Noida',
    age: 24,
    gender: 'Male'
  }
  testdata: any = [
    {
      id: 1,
      name: 'monti',
      emp: 'PE',
      hidetext: true

    },
    {
      id: 2,
      name: 'monti .......',
      emp: 'PE.....',
      hidetext: false
    }
  ]
}
