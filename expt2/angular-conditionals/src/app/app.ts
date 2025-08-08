import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-conditionals');
  login_success=false;
  login_attempted=false;
  username='user1';
  password='secret_password';
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
}
