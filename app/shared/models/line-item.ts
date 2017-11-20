import { Product } from './product';


export class LineItem {
  id?: number;
  productId: number;
  quantity: number;
  totalPrice: number;
  total?: number;
 
}
