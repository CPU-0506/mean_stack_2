import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeRegistrationForm } from './employee-registration-form/employee-registration-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmployeeRegistrationForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forms');
}
