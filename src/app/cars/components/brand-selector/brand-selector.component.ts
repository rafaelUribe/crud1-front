import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Brand } from '../../interfaces/brand.interface';

@Component({
  selector: 'app-brand-selector',
  templateUrl: './brand-selector.component.html',
  styleUrls: ['./brand-selector.component.css']
})
export class BrandSelectorComponent {

  @Input('brands') brands: Brand[] = [];
  @Output() onSelection: EventEmitter<Brand> = new EventEmitter();
  @Input('labl') labl: string = "";

  selected!: Brand;
  brandID!: number;

  onChange(){
    console.log(this.brandID)
    console.log(this.brands)
    this.selected = this.brands.filter( brand => brand.id == this.brandID )[0]
    console.log(this.selected)
    this.onSelection.emit(this.selected)
  }
}
