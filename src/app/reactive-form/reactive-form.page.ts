import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from '../validators/noSpaveAllawed.validator';
// import { noSpaceAllowed } from '../validators/noSpaveAllawed.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.page.html',
  styleUrls: ['./reactive-form.page.scss'],
})
export class ReactiveFormPage implements OnInit {
  reactiveForm: FormGroup;
  constructor() { }
  countrySelected: any = 'India';
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
      // noSpaceAllowed (using function based)
      CustomValidators.noSpaceAllowed // used as class based
      ]),
      mobile: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      address: new FormGroup({ // grouping form
        street: new FormControl(null),
        country: new FormControl('India'),
        city: new FormControl(null),
        pincode: new FormControl(null)
      }),
      skills: new FormArray([
        new FormControl(null, Validators.required),
        new FormControl(null, Validators.required),
        new FormControl(null, Validators.required),
        new FormControl(null),
      ])
    })
    this.reactiveForm.get('firstname').valueChanges.subscribe((value) => {
      console.log(value);
    })
    this.reactiveForm.valueChanges.subscribe((data) => {
      console.log(data);
    })
    this.reactiveForm.get('firstname').statusChanges.subscribe((status) => {
      console.log(status);
    })
    this.reactiveForm.statusChanges.subscribe((dataStatus) => {
      console.log(dataStatus);
    })
  }
  onReactiveFormSubmited() {
    console.log(this.reactiveForm);
  }


  countryArray = [
    {
      id: 1,
      countryName: 'India',
      value: 'India'
    },
    {
      id: 2,
      countryName: 'Nepal',
      value: 'Nepal'
    },
    {
      id: 3,
      countryName: 'Bagladesh',
      value: 'Bagladesh'
    },
    {
      id: 4,
      countryName: 'Pakistan',
      value: 'Pakistan'
    },
    {
      id: 5,
      countryName: 'US',
      value: 'US'
    },
    {
      id: 6,
      countryName: 'Canada',
      value: 'Canada'
    },
    {
      id: 7,
      countryName: 'America',
      value: 'America'
    },
    {
      id: 8,
      countryName: 'United Kingdom',
      value: 'United_kingdom'
    }
  ]
}
