import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariableService } from '../services/global-variable.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router,
              public gvvv: GlobalVariableService) { }

  ngOnInit() {
    this.gvvv.username='Radhe Noida';
    const userCHange=this.gvvv.username;
    console.log(userCHange);
  }

  onHomeRoute(){
    this.router.navigate(['/home'])
    }

}
