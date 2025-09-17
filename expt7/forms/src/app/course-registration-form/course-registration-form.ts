import { Component } from '@angular/core';
import { Student } from '../student.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-registration-form',
  imports: [FormsModule],
  templateUrl: './course-registration-form.html',
  styleUrl: './course-registration-form.css'
})
export class CourseRegistrationForm {
    courses = ['Math', 'Physics', 'Chemistry', 'Biology'];
    selectedCourses: string[] = [];
    model = new Student('', '', []);
    submitted = false;

    onCourseChange(event: any) {
        const course = event.target.value;
        if (event.target.checked) {
        this.selectedCourses.push(course);
        }
        else {
            this.selectedCourses = this.selectedCourses.filter(c => c !== course);
        }
    }

    onSubmit(id: string, name: string, courses: string[]) {
        if(this.selectedCourses.length){
            this.model = new Student(id, name, [...this.selectedCourses]);
            this.submitted = true;
        }
    }

    newStudent() {
        this.model = new Student('', '', []);
        this.selectedCourses = [];
        this.submitted = false;
    }
}
