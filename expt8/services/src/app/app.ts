import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookDetails } from './book-details/book-details';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BookDetails],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('services');
}
