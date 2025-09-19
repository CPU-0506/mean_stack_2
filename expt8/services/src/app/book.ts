import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Book {
    book_details=[
        {'id':10001,'name':"Book 1",'author':'Author1'},
        {'id':10002,'name':"Book 2",'author':'Author2'},
        {'id':10003,'name':"Book 3",'author':'Author3'},
        {'id':10004,'name':"Book 4",'author':'Author2'},
        {'id':10005,'name':"Book 5",'author':'Author1'},
    ];
    fetch_all(){
        return this.book_details;
    }
}