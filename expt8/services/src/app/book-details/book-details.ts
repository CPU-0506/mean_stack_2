import { Component, inject } from '@angular/core';
import { Book } from '../book';

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

  fetchBook(id:string) {
      this.fetchedBook = this.book_details?.find(book => book.id == Number(id)) ?? null;
      console.log('fetchedBook:', this.fetchedBook);
    }
}
