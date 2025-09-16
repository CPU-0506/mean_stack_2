import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseList } from './course-list/course-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CourseList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('components');
  sub_name='';
  registered_courses:string[]=[];
  submit(name:string){
    this.sub_name=name;
  }
  receive_registration($event:string){
    this.registered_courses.push($event);
  }
}
