import { Component, signal, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseList } from './course-list/course-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CourseList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  protected readonly title = signal('components');
  sub_name='';
  registered_courses:string[]=[];
  submit(name:string){
    this.sub_name=name;
  }
  receive_registration($event:string){
    this.registered_courses.push($event);
  }
  constructor() {
    console.log('App: constructor');
  }

  ngOnInit() {
    console.log('App: ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('App: ngOnChanges', changes);
  }

  ngDoCheck() {
    console.log('App: ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('App: ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('App: ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('App: ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('App: ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('App: ngOnDestroy');
  }
}
