import { Component, inject } from '@angular/core';
import { Book } from '../book';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.html',
  styleUrl: './book-details.css'
})
export class BookDetails {
    private book = inject(Book);
    book_details = this.book.fetch_all();
    fetchedBook: any = null;

    counterObservable=interval(1000);
    counter=toSignal(this.counterObservable, {initialValue:0});
}
