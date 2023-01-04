import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BrandsComponent } from './pages/brands/brands.component';
import { CarsComponent } from './pages/cars/cars.component';
import { SearchInputComponent } from './components/search-input/search-input.component';



@NgModule({
  declarations: [
    BrandsComponent,
    CarsComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    CarsComponent,
    BrandsComponent,
  ],
})
export class CarsModule { }
