import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  @Input('placeholder') placeholder: string = "";
  @Input('labl') labl: string = "";
  @Output() onInput: EventEmitter<string> = new EventEmitter();
  
  term: string = "";
  
  BarInput(){
    this.onInput.emit(this.term);
  }

}
