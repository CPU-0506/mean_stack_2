import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmulatedCard } from './emulated-card/emulated-card';
import { NoneCard } from './none-card/none-card';
import { ShadowCard } from './shadow-card/shadow-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmulatedCard,NoneCard,ShadowCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('components');
}
