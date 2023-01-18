import { IBook } from './book';
import { DialogActionType } from '../models/dialog-action-type'

export interface IBookDialogData {
  book?: IBook,
  action: DialogActionType
}