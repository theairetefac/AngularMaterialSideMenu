import {Injectable} from '@angular/core';
import {IBook} from "../interfaces/book";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _currentId: number;

  //TODO: Заполнить книгами
  private _books: IBook[] = [
    {
      id: 1,
      name: 'Дюна',
      author: {
        firstName: 'Френк',
        lastName: 'Герберт'
      }
    },
    {
      id: 2,
      name: 'Мастер и Маргарита',
      author: {
        firstName: 'Михаил',
        lastName: 'Булгаков'
      }
    },
    {
      id: 3,
      name: 'Анна Каренина',
      author: {
        firstName: 'Лев',
        lastName: 'Толстой'
      }
    },
    {
      id: 4,
      name: 'Лолита',
      author: {
        firstName: 'Владимир',
        lastName: 'Набоков'
      }
    },
    {
      id: 5,
      name: 'Идиот',
      author: {
        firstName: 'Фёдор',
        lastName: 'Достоевский'
      }
    },
    {
      id: 6,
      name: 'Отцы и дети',
      author: {
        firstName: 'Иван',
        lastName: 'Тургенев'
      }
    },
    {
      id: 7,
      name: 'Мёртвые души',
      author: {
        firstName: 'Николай',
        lastName: 'Гоголь'
      }
    },
    {
      id: 8,
      name: '1984',
      author: {
        firstName: 'Джордж',
        lastName: 'Оруэлл'
      }
    },
    {
      id: 9,
      name: 'О дивный новый мир',
      author: {
        firstName: 'Олдос',
        lastName: 'Хаксли'
      }
    },
  ];

  constructor() {
    this._currentId = Math.max(...this._books.map(b => b.id));
  }

  public getList(): Observable<IBook[]> {
    return of(this._books);
  }

  public addBook(book: IBook): Observable<any> {
    this._currentId++;
    book.id = this._currentId;
    this._books.push(book);
    return of();
  }

  public editBook(book: IBook): Observable<any> {
    const index = this._books.findIndex(b => b.id == book.id);
    if (index != -1) {
      this._books[index] = book;
    }
    return of();
  }

  public deleteBook(book: IBook): Observable<any> {
    this._books = this._books.filter(b => b.id != book.id)
    return of();
  }
}
