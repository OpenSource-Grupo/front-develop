import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

interface Tenant {
  value: string;
  viewValue: string;
}

interface Add{
  value: string;
  viewValue: string;
}

interface Category{
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class AddpropertyComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  tenants: Tenant[] = [
    {value: 'add tenant', viewValue: 'Add tenant'},
    {value: 'see tenant', viewValue: 'See tenant'},
  ];

  adds: Add[] = [
    {value: 'add property', viewValue: 'Add property'},
    {value: 'see property', viewValue: 'See property'},
  ];

  categories: Add[] = [
    {value: 'rooms', viewValue: 'Rooms'},
    {value: 'households', viewValue: 'Households'},
    {value: 'business premises', viewValue: 'Business premises'},
    {value: 'departaments', viewValue: 'Departaments'},
  ];

  selectedValue: any;


}
