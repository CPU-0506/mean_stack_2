import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('binding');
  isValid:boolean=false;
  validate() {
  if(this.isValid==true){
    console.log("Already validated!..");
  }else{
  console.log("Validating automatically..!");
  this.isValid=true;
  }
  }
}
