import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css'
})
export class Hello {
course="Angular.js"
change(){
    this.course==="MongoDB"?this.course='Angular.js':this.course='MongoDB';
}
}
