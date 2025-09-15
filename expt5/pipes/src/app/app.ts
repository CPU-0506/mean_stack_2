import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyPipe, DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { CourseList } from './course-list/course-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CourseList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipes');
  showVar=false;
  product_details=[{'id':'PROD_0001','name':'Watch','price':10000,'mfg_date':'12-12-12'}]
  show() {
    if(this.showVar==false){
      this.showVar=true;
    }
    else{
      this.showVar=false;
    }
  }
}
