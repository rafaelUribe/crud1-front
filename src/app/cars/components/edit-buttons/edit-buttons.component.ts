import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-buttons',
  templateUrl: './edit-buttons.component.html',
  styleUrls: ['./edit-buttons.component.css']
})
export class EditButtonsComponent {

  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  saveButton(){
    this.onSave.emit();
  }

  cancelButton(){
    this.onCancel.emit();
  }

  deleteButton(){
    this.onDelete.emit();
  }

}
