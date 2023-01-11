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
export class BookDialogComponent implements OnInit {

  public DialogActionType = DialogActionType;

  public bookForm = new FormGroup({
    name: new FormControl('', Validators.required),
    author: new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    })
  });

  public get name(): FormControl {
    return this.bookForm.get('name') as FormControl;
  }

  public get author(): FormGroup {
    return this.bookForm.get('author') as FormGroup;
  }

  public get firstName(): FormControl {
    return this.author.get('firstName') as FormControl;
  }

  public get lastName(): FormControl {
    return this.author.get('lastName') as FormControl;
  }

  constructor(
    public dialogRef: MatDialogRef<BookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IBookDialogData
  ) {
  }

  public ngOnInit() {
    if (this.data.book) {
      this.name.setValue(this.data.book.name);
      this.firstName.setValue(this.data.book.author.firstName);
      this.lastName.setValue(this.data.book.author.lastName);
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
      author: {
        firstName: this.firstName.value,
        lastName: this.lastName.value
      }
    } as IBook;

    this.dialogRef.close(book);
  }
}
