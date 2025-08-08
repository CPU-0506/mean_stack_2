import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Repeat } from './repeat';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule,Repeat],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-conditionals');
  times=1;
  login_success=false;
  login_attempted=false;
  courses_available=false;
  username='user1';
  password='1234';
  courses=['Angular.js','MongoDB'];
  selectedCourse=''
  login(username:string,password:string){
    this.login_attempted=true;
    if (username===this.username){
        console.log("valid username");
        if(password===this.password){
            console.log('valid password');
            this.login_success=true;
        }
    }
  }
  show_courses(){
    this.courses_available=this.courses_available===true?false:true;
  }
  set_times(times:number){
    this.times=times;
  }
}
