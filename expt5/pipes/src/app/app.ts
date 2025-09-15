import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LowerCasePipe,UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipes');
  showVar=false;
  code='CODE:001';
  name='product_name';
  show() {
    if(this.showVar==false){
      this.showVar=true;
    }
    else{
      this.showVar=false;
    }
  }
}
