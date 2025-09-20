import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HTTPService } from './app.config';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('httpClient');
  backend=inject(HTTPService);
  data:any=null;

  ngOnInit(){
    this.get_request();
  }

  get_request(){
    this.backend.http.get('http://localhost:9000/books',{})
    .subscribe(
        data => {
            console.log(data);
            this.data=data;
        }
    )
  }
}
