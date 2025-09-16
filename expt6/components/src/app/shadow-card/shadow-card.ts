import { Component, ViewEncapsulation } from '@angular/core';
import { NoneCard } from '../none-card/none-card';
import { EmulatedCard } from '../emulated-card/emulated-card';

@Component({
  selector: 'app-shadow-card',
  imports: [NoneCard,EmulatedCard],
  templateUrl: './shadow-card.html',
  styleUrl: './shadow-card.css',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowCard {

}
