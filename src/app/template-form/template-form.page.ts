import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalVariableService } from '../services/global-variable.service';
import { ModalController } from '@ionic/angular';
import { ChildComponent } from '../child/child.component';
import { Observable, Subject } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import * as faceapi from 'face-api.js';



@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.page.html',
  styleUrls: ['./template-form.page.scss'],
})
export class TemplateFormPage implements OnInit {
// @ViewChild('templateDrivenForm') form : NgForm;
userfirstname:any='';
parentVariableValue:any='Tripti'

@ViewChild("video")
public video: ElementRef;

@ViewChild("canvas")
public canvas: ElementRef;

public captures: Array<any>;


nandini:any='DatainParent'

  constructor(public gVariable: GlobalVariableService,
             public modalController: ModalController) { 
              this.captures = [];
             }

  ngOnInit() {
  }
  getDataFromChildIntoParent(e:any){
    console.log(e);
  }
  displayDataFromChildToParent:any=[];
  dataFromChild(e){
    this.displayDataFromChildToParent=e;
    console.log(e)
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


  ionViewWillEnter() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
          .then((stream) => {
              this.video.nativeElement.srcObject = stream;
              this.video.nativeElement.play();
              setInterval(async () => {
                this.detectBlink();
              },100)
             
          })
          .catch((error) => {
              console.error('Error accessing camera:', error);
          });
  }
}

async detectBlink() {
  await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
  await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
  await faceapi.nets.faceExpressionNet.loadFromUri('/models');

  const videoEl = this.video.nativeElement;

  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(videoEl, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();
      

    // Check for blink (you may need to adjust the thresholds)
    if (detections.length > 0) {
      
      const expressions = detections[0].expressions;
      alert(expressions)
      // Adjust the threshold as needed
      if (expressions.happy > 0.5) {
        this.capture();
      }
    }
  }, 100); // Adjust the interval as needed
}

capture() {
  var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
  this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
  this.detectBlink();
}

}
