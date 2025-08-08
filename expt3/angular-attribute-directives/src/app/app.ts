import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShowMessageDirective } from './show-message';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,ShowMessageDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-attribute-directives');
}
