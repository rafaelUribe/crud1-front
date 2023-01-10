import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-save-buttons',
  templateUrl: './save-buttons.component.html',
  styleUrls: ['./save-buttons.component.css']
})
export class SaveButtonsComponent {

  @Input() saveLabel: string = '';
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  saveButton(){
    this.onSave.emit();
  }

  cancelButton(){
    this.onCancel.emit();
  }

}
