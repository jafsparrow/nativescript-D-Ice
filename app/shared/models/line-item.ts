import { Product } from './product';


export class LineItem {
  id?: number;
  product: number; // this is the needed field which is basically product ID.
  quantity: number;
  totalPrice?: number;
  total?: number;
  price?: number;
 
}
