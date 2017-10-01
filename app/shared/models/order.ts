import { LineItem } from './line-item';


export class Order {
        id: number;
        total: number;
        created_at: Date;
        total_quantity: number;
        line_items: LineItem[];

        constructor(orderNo: number, lineItems: Array<LineItem>) {
                this.id = orderNo;
                this.line_items = lineItems;
        }
  
}
