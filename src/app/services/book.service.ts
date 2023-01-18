import { Injectable } from '@angular/core';
import { IBook } from "../interfaces/book";
import { Observable, of, tap } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/enironments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books: IBook[] = [];
  public get Books(): Observable<IBook[]> {
    return of(this._books);
  }

  constructor(private httpClient: HttpClient) {
    this.getBooks().subscribe(b => this._books = b)
  }

  public getBooks = (): Observable<any> =>
    this.httpClient.get<IBook[]>(environment.apiUrl + 'books', {})

  public generateBooks = (count: number): Observable<any> =>
    this.httpClient.post<IBook[]>(environment.apiUrl + `books/generate/${count}`, {})
      .pipe(
        tap({
          complete: (() => this.getBooks().subscribe(b => this._books = b))
        })
      )

  public deleteBooks = (): Observable<any> =>
    this.httpClient.delete<IBook[]>(environment.apiUrl + 'books', {})
      .pipe(
        tap({
          complete: (() => this.getBooks().subscribe(b => this._books = b))
        })
      )

  public addBook = (book: IBook): Observable<any> =>
    this.httpClient.post<IBook[]>(environment.apiUrl + 'books', {name: book.name, author: book.author}, {
      headers: new HttpHeaders({ ['Content-Type']: 'application/json' })
    })
      .pipe(
        tap({
          complete: (() => this.getBooks().subscribe(b => this._books = b))
        })
      )

  public editBook = (book: IBook): Observable<any> =>
    this.httpClient.put<IBook[]>(environment.apiUrl + `books/${book.id}`, { name: book.name, author: book.author }, {
      headers: new HttpHeaders({ ['Content-Type']: 'application/json' })
    })
      .pipe(
        tap({
          complete: (() => this.getBooks().subscribe(b => this._books = b))
        })
      )

  public deleteBook = (book: IBook): Observable<any> =>
    this.httpClient.delete<IBook[]>(environment.apiUrl + `books/${book.id}`, {})
      .pipe(
        tap({
          complete: (() => this.getBooks().subscribe(b => this._books = b))
        })
      )

}
