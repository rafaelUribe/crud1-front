import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Brand, NBrand} from '../interfaces/brand.interface';
import { Car, NCar } from '../interfaces/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) {}

  apiUrl: string = "http://localhost:8080/api"

  getAllBrands(): Observable<Brand[]>{
    const url = `${this.apiUrl}/brand`
    return this.http.get<Brand[]>(url)
  }

  deleteBrand(id: number): Observable<any>{
    const url = `${this.apiUrl}/brand/${id}`
    return this.http.delete(url);
  }

  updateBrand(brand: Brand): Observable<any>{
    const url = `${this.apiUrl}/brand`
    return this.http.put(url, brand);
  }

  addNewBrand(brand: NBrand): Observable<any>{
    const url = `${this.apiUrl}/brand`
    return this.http.post(url, brand)
  }

  getAllCars(): Observable<Car[]>{
    const url = `${this.apiUrl}/car`
    return this.http.get<Car[]>(url)
  }

  deleteCar(id: number): Observable<any>{
    const url = `${this.apiUrl}/car/${id}`
    return this.http.delete(url);
  }

  updateCar(car: Car): Observable<any>{
    const url = `${this.apiUrl}/car`
    return this.http.put(url, car);
  }

  addNewCar(car: NCar): Observable<any>{
    const url = `${this.apiUrl}/car`
    return this.http.post(url, car)
  }

}
