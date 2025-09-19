import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailValidator } from '../email-validator';

@Component({
  selector: 'app-employee-registration-form',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './employee-registration-form.html',
  styleUrl: './employee-registration-form.css'
})
export class EmployeeRegistrationForm {
    empForm= new FormGroup({
        firstname: new FormControl('',Validators.required),
        lastname: new FormControl('',Validators.required),
        email: new FormControl('',[Validators.required,EmailValidator(/[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}/i)])
    });
}
