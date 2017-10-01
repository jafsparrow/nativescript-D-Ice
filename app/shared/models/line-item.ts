import { Product } from './product';


export class LineItem {
  id: number;
  product: Product;
  quantity: number;
  totalPrice: number;
  total: number;
 
}
