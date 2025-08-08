import { Component } from '@angular/core';
import { Child } from '../child/child'
@Component({
  selector: 'app-hello',
  imports: [Child],
  templateUrl: './hello.html',
  styleUrl: './hello.css'
})
export class Hello {
courses=["Angular.js","MongoDB"]
i=0
change(){
    console.log(this.courses[this.i]);
    this.i++;
    this.i=this.i>=this.courses.length?0:this.i;
}
add(course_name:string){
    var exists=false;
    for (let i = 0; i < this.courses.length; i++) {
        if(course_name===this.courses[i]){
            exists=true;
        }
    }
    if (!exists){
        this.courses.push(course_name);
    }
}
}
