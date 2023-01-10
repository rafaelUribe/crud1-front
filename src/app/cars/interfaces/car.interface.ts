import { Brand } from "./brand.interface";

export interface Car {
    id:    number;
    name:  string;
    brand: Brand;
}

export interface NCar {
    name: string;
    brand: Brand;
}