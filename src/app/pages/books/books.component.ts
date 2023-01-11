import { Component, HostBinding, Input } from '@angular/core';
import { BookService } from "../../services/book.service";
import { MatDialog } from "@angular/material/dialog";
import { BookDialogComponent } from "./dialogs/book-dialog/book-dialog.component";
import { IBook } from "../../interfaces/book";
import { DialogActionType } from '../../models/dialog-action-type';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  @HostBinding('class') @Input('class') classList: string = 'container full-width';

  constructor(
    public bookService: BookService,
    private dialog: MatDialog
  ) {
  }

  public addBook() {
    const dialogRef = this.dialog.open(BookDialogComponent, {
      data: {
        action: DialogActionType.ADD
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookService.addBook(result).subscribe();
      }
    });
  }

  public editBook(book: IBook) {
    const dialogRef = this.dialog.open(BookDialogComponent, {
      data: {
        book,
        action: DialogActionType.EDIT
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookService.editBook(result).subscribe();
      }
    });
  }

  public deleteBook(book: IBook) {
    this.bookService.deleteBook(book).subscribe();
  }
}
