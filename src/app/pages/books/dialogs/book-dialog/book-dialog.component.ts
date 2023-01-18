import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { IBook } from "../../../../interfaces/book";
import { IBookDialogData } from '../../../../interfaces/book-dialog-data';
import { DialogActionType } from '../../../../models/dialog-action-type';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss']
})
export class BookDialogComponent {

  public DialogActionType = DialogActionType;

  public bookForm = new FormGroup({
    name: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required)
  });

  public get name(): FormControl {
    return this.bookForm.get('name') as FormControl;
  }

  public get author(): FormControl {
    return this.bookForm.get('author') as FormControl;
  }

  constructor(
    public dialogRef: MatDialogRef<BookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IBookDialogData
  ) {
    if (this.data.book) {
      this.name.setValue(this.data.book.name);
      this.author.setValue(this.data.book.author);
    }
  }

  public onCancelClick() {
    this.dialogRef.close();
  }

  public onActionClick() {
    if (this.bookForm.invalid) return;

    let book = {
      id: this.data.book?.id,
      name: this.name.value,
      author: this.author.value
    } as IBook;

    this.dialogRef.close(book);
  }
}
