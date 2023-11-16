import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.page.html',
  styleUrls: ['./template-form.page.scss'],
})
export class TemplateFormPage implements OnInit {
@ViewChild('templateDrivenForm') form : NgForm;
userfirstname:any='';

  constructor() { }

  ngOnInit() {
  }
  onTemplateDrivenFormSubmited(form: NgForm){
    console.log('click')
    console.log(form)
    console.log(form.controls['firstname'].value)
    //  we can access value using controls also, we have to pass variable name
  }
  // onTemplateDrivenFormSubmited(){
  //   console.log(this.form.value)
  // }
}
