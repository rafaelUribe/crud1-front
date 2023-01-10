import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../interfaces/car.interface';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css']
})
export class CarsTableComponent {
  @Input('cars') cars: Car[] = [];
  @Output() onSelection: EventEmitter<Car> = new EventEmitter();

  selection(car: Car){
    this.onSelection.emit(car)
  }
}
