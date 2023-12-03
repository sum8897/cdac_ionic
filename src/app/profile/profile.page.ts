import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariableService } from '../services/global-variable.service';
import { AuthService } from '../services/auth.service';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
userDataList:any='';
  constructor(private router: Router,
    public gvvv: GlobalVariableService,
    public auth: AuthService) {

     }

  ngOnInit() {
    this.gvvv.username = 'Radhe Noida';
    const userCHange = this.gvvv.username;
    console.log(userCHange);
    this.getFakeData();
    this.getFakeData1();
    this.singleUserList();
  }

  onHomeRoute() {
    this.router.navigate(['/home'])
  }

  getFakeData() {
    this.auth.getData().subscribe((datalistaaa) => {
      this.userDataList=datalistaaa;
      // console.log(datalistaaa);
    }, err => {
      console.log('got error');
    })
  }
  getFakeData1() {

    this.auth.getnanData().subscribe({
      next: (getNanData) => {
      this.userDataList=getNanData;
      console.log((getNanData));
    },
     error:(e) => {
      console.log('got error');
    }
  });

  }
singleUserList(){
  const id=2;
  this.auth.getSingleData(id).subscribe((data)=>{
    console.log(data)
  },err=>{
    console.log(err)
  })
}


singleUserList1(){
  const userdata={
    id:1,
    name:'ashish',
    lastname:'chaurasiya',
    mobile: 8767654587,
    email: 'ashishchaurasiya@in'
  };
  this.auth.getSingleData(userdata).subscribe((data)=>{
    console.log(data)
  },err=>{
    console.log(err)
  })
}
}
