import { Component, ViewChild } from '@angular/core';
import { BrandSelectorComponent } from '../../components/brand-selector/brand-selector.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { Brand } from '../../interfaces/brand.interface';
import { Car, NCar } from '../../interfaces/car.interface';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent{
  
  public _cars: Car[] = [];

  public _displayCars: Car[] = []

  public _brands: Brand[] = [];

  public _brand!: Brand;

  _term: string = "";

  public editionMode = false;

  @ViewChild(SearchInputComponent)
  public searchInput!: SearchInputComponent;

  @ViewChild(SearchInputComponent)
  public brandSelector!: BrandSelectorComponent;

  constructor(private carsService: CarsService){
    this.loadBrands()
    this.loadCars()
  }

  setBrand(brand: Brand){
    this._brand = brand
  }

  loadBrands(){
    this.carsService.getAllBrands()
      .subscribe( (brands) => {
        this._brands = [...brands]
      }, (err) => {
        console.log(err)
        this._brands = []
      })
  }

  loadCars(){
    this.carsService.getAllCars()
    .subscribe( (cars) => {
      this._cars = [...cars]
      this.filterCars()
    }, (err) => {
      console.log(err)
      this._brands = []
    })
  }

  cancel(){
    this.searchInput.term = "";
    this._term = "";
    this.editionMode = false;
    this.filterCars()
  }

  filterCars(){
    this._displayCars = this._cars.filter( car =>
      car.name.toLowerCase().includes(this._term.toLowerCase())
    )
  }

  searchInputCall(term: string){
    this._term = term;
    this.filterCars()
  }

  addNewCar(){
    if(this.searchInput.term.trim().length === 0 && !this._brand){
      alert("Be sure to select a brand and enter a car name")
      return
    }
    const c: NCar = {
      name: this.searchInput.term.trim(),
      brand: this._brand,
    }
    this.carsService.addNewCar(c)
      .subscribe( (resp) => {
        alert(`You successfully added ${resp.id}: ${resp.brand.name} ${resp.name}`)
        this.cancel()
        this.loadCars()
      })
  }

  setEdition(car: Car){
    this.editionMode = true;
    this._term = car.name;
    this.searchInput.term = car.name;
    this._brand = car.brand;
  }

  updateCar(){
    
  }

  deleteCar(){

  }

}
