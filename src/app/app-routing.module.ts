import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrandsComponent } from "./cars/pages/brands/brands.component";
import { CarsComponent } from "./cars/pages/cars/cars.component";

const routes: Routes = [
    {
        path: '',
        component: CarsComponent,
        pathMatch: 'full',
    },
    {
        path: 'brands',
        component: BrandsComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}