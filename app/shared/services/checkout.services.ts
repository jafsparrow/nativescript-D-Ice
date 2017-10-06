import { Injectable } from '@angular/core';

import { Product } from "../models/product";
import { LineItem } from "../models/line-item";
import { Order } from "../models/order";
@Injectable()
export class CheckOutService {
    
    lineItems: LineItem[];
  
    constructor() {
      this.lineItems = [];
    }
  

  
    addProductToCart(product: any, quantity: number) {

      console.log(`product name is ${product.name} and quantitiy is ${quantity}`);
      const lineItem: LineItem = Object.assign({}, product);
      lineItem.id = product.id;
      lineItem.quantity = quantity;
      lineItem.totalPrice = product.price * quantity;
      console.log(lineItem.totalPrice);
      const index = this.lineItems.findIndex( (item) => {
         return item.id === product.id
      });

      if(index > -1) {
        // edit the current item .
        this.lineItems[index].quantity = quantity;
        this.lineItems[index].totalPrice = quantity * product.price;
  
      }else {
        this.lineItems.push(lineItem);
      }

      

      console.log(`the length now is ${this.lineItems.length}`);
      console.log(this.lineItems);
    }
  
    removeProductFromCart(product: any) {
      // const index = this.lineItems.indexOf(product);
      const filteredItems = this.lineItems.filter(item => {
        return item.id !== product.id;
      })
  
      this.lineItems = filteredItems;
    }
  
    changeProdcutQuantity(product: any, newQuantity: number) {
      const lineItem: LineItem = Object.assign({}, product);
      lineItem.quantity = newQuantity;
      lineItem.totalPrice = product.price * newQuantity;
  
      const index = this.lineItems.findIndex( item => {
        return item.product.id === product.id
      });
      Object.assign(this.lineItems[index], lineItem);
  
    }
  
    editProductFromCart(product: any) {
  
    }

    
    getTheCartProductCount(): number {
      return this.lineItems.length;
    }    

    getCartTotalPrice(): number {
      return this.lineItems.reduce((prev, item) => {
        return prev = prev + item.totalPrice;
        
      },0);
    }
    getTheCart() {
      console.log('from service fetching cart item.');
      console.log(this.lineItems);
      return this.lineItems;
    }

    getCartSummary() {



      // return {
      //   count: this.lineItems.length;
      //   totalPrice: this.line
      // }
    }

    tearDownCurrentCart() {
      console.log(this.lineItems.length);
      for (let i = this.lineItems.length; i > 0; i--) {
        
        this.lineItems.pop();
        console.log('*********');
       }
       console.log(this.lineItems.length);
    }

}