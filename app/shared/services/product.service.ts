import { Injectable } from "@angular/core";

import { Product } from "../models/product";

@Injectable()
export class ProductService {

    getProducts() {
        return PRODUCTS;
    }

    getProductDetails(id: number) {
        return PRODUCTS.filter(item => item.id === id)[0];
    }

}


export const PRODUCTS: Product[] = [
  { id: 11, name: 'Mr. Nice', price: 34 },
  { id: 12, name: 'Narco', price: 34 },
  { id: 13, name: 'Bombasto', price: 34 },
  { id: 14, name: 'Celeritas', price: 34 },
  { id: 15, name: 'Magneta', price: 34 },
  { id: 16, name: 'RubberMan', price: 34 },
  { id: 17, name: 'Dynama', price: 34 },
  { id: 18, name: 'Dr IQ', price: 34 },
  { id: 19, name: 'Magma', price: 34 },
  { id: 20, name: 'Tornado', price: 34 }
];