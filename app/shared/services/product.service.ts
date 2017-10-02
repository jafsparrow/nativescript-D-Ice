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
  { id: 11, name: 'Mr. Nice', price: 30, image: 'http://2.bp.blogspot.com/-fAvw5ZcL4as/TmUEifELB1I/AAAAAAAAAeg/NM2U_E1L6ak/s400/url.jpg' },
  { id: 12, name: 'Narco', price: 40, image: 'http://www.seriouseats.com/images/2016/05/20160519-ice-cream-recipes-roundup-18.jpg' },
  { id: 13, name: 'Bombasto', price: 70, image: 'https://pbs.twimg.com/media/CxkfzCYVIAADK7n.jpg' },
  { id: 14, name: 'Celeritas', price: 20, image: 'https://pbs.twimg.com/media/CvEwVVnWYAAqVen.jpg' },
  { id: 15, name: 'Magneta', price: 100, image: 'https://pbs.twimg.com/media/Cx0O5vPUcAAt6nv.jpg' },
  { id: 16, name: 'RubberMan', price: 120, image: 'https://pbs.twimg.com/media/DJPcl8wUQAAxi9p.jpg' },
  { id: 17, name: 'Dynama', price: 80 },
  { id: 18, name: 'Dr IQ', price: 40 },
  { id: 19, name: 'Magma', price: 34 },
  { id: 20, name: 'Tornado', price: 34 }
];