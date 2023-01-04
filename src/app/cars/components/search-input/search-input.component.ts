import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  @Input('placeholder') placeholder: string = "";
  @Output() onSubmt: EventEmitter<string> = new EventEmitter();

  term: string = '';

  search(){
    if(this.term.trim().length === 0){
      this.term = ''
      return
    }

    this.onSubmt.emit(this.term);

    this.term = "";
  }

}
