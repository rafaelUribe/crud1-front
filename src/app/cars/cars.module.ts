import { NgModule } from '@angular/core';
import { FormsModule, NgSelectOption } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BrandsComponent } from './pages/brands/brands.component';
import { CarsComponent } from './pages/cars/cars.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { EditButtonsComponent } from './components/edit-buttons/edit-buttons.component';
import { SaveButtonsComponent } from './components/save-buttons/save-buttons.component';
import { BrandSelectorComponent } from './components/brand-selector/brand-selector.component';
import { CarsTableComponent } from './components/cars-table/cars-table.component';
import { CarEditorComponent } from './components/car-editor/car-editor.component';



@NgModule({
  declarations: [
    BrandsComponent,
    CarsComponent,
    SearchInputComponent,
    EditButtonsComponent,
    SaveButtonsComponent,
    BrandSelectorComponent,
    CarsTableComponent,
    CarEditorComponent
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
