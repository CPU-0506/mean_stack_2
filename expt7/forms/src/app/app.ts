import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseRegistrationForm } from './course-registration-form/course-registration-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CourseRegistrationForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forms');
}
