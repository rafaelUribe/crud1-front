import { Component, ViewChild } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { Brand, NBrand } from '../../interfaces/brand.interface';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {

  brands: Brand[] = [];

  displayBrands: Brand[] = [];

  editionBrand!: Brand;

  editionMode: boolean = false;

  errorExists: boolean = false;

  loadingMessage: string = "Loading brands..."

  term: string = '';

  @ViewChild(SearchInputComponent)
  private searchInput!: SearchInputComponent;

  constructor(private carsService: CarsService){
    this.loadBrands()
  }  
  
  loadBrands(){
    this.carsService.getAllBrands()
      .subscribe( (brands) => {
        this.brands = [...brands]
        this.displayBrands = [...brands]
      }, (err) => {
        this.errorExists = true;
        console.log(err)
        this.brands = []
      })
  }

  filterBrands(str: string){
    this.term = str
    this.displayBrands = this.brands.filter( brand => 
      brand.name.toLowerCase().includes(str.toLowerCase()))
  }

  setEditionBrand(brand: Brand){
    this.editionBrand = {...brand};
    this.editionMode = true
  }

  cancelEdition(){
    this.editionMode = false;
  }

  resetInput(){
    this.term = '';
    this.searchInput.term = '';
    this.filterBrands(this.term)
  }

  deleteB(){
    this.carsService.deleteBrand(this.editionBrand.id)
      .subscribe( (resp) => {
        alert(resp)
        this.editionMode = false;
        this.loadBrands()
      }, (err) => {
        console.log("there was an error");
        console.log(err);
        this.editionMode = false;
        this.loadBrands()
      })
  }

  updateB(){
    this.carsService.updateBrand(this.editionBrand)
      .subscribe( (resp) => {
        alert("You successfully added " + resp.id + ": " + resp.name)
        this.editionMode = false;
        this.loadBrands()
      }, (err) => {
        console.log("There was an error");
        console.log(err);
        this.editionMode = false;
        this.loadBrands()
      })
  }

  saveB(){
    if(this.term.trim().length === 0){
      return
    }
    const b: NBrand = {
      name: this.term
    }
    this.carsService.addNewBrand(b)
    .subscribe( (resp) =>{
      alert("You successfully added " + resp.id + ": " + resp.name)
      this.resetInput()
      this.loadBrands()
    }, (err) => {
      console.log("there was an error");
      console.log(err);
    })
  }

}
