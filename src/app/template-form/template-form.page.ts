import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalVariableService } from '../services/global-variable.service';
import { ModalController } from '@ionic/angular';
import { ChildComponent } from '../child/child.component';




@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.page.html',
  styleUrls: ['./template-form.page.scss'],
})
export class TemplateFormPage implements OnInit {
// @ViewChild('templateDrivenForm') form : NgForm;
userfirstname:any='';

  constructor(public gVariable: GlobalVariableService,
             public modalController: ModalController) { }

  ngOnInit() {
  }
  parentMessage:any='';
  parentMessage1:any='second data';
  parentMessage2:any='';
  async onParentToChild(){
    this.gVariable.username='ashish';
    console.log(this.gVariable.username)
    this.userfirstname='Ashish chau';
    this.parentMessage='send data from parent to child'+ 828728278;
    this.parentMessage1='override data';
    this.parentMessage2='third data';



    // const modal = await this.modalController.create({
    //   component: ChildComponent,
    //   componentProps: { firstname: this.gVariable.userObj },
    //   cssClass: "my-modal-class PatientRevisit",
    // });
    // await modal.present();
  }




  onTemplateDrivenFormSubmited(form: NgForm){
    console.log(form.value);

  }
//   onTemplateDrivenFormSubmited(form: NgForm){
// console.log(form)
//   }
  // onTemplateDrivenFormSubmited(form: NgForm){
  //   console.log('click')
  //   console.log(form)
  //   console.log(form.controls['firstname'].value)
  //    we can access value using controls also, we have to pass variable name
  // }
  // onTemplateDrivenFormSubmited(){
  //   console.log(this.form.value)
  // }
}
