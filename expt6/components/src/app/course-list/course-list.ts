import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-list',
  imports: [],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
    @Input() course_name!:string;
    course_details=[
        {"id":"sub-1","name":"course-1",'branch':'b1'},
        {"id":"sub-2","name":"course-2",'branch':'b1'},
        {"id":"sub-3","name":"course-3",'branch':'b2'},
        {"id":"sub-4","name":"course-4",'branch':'b2'}
    ]
}
