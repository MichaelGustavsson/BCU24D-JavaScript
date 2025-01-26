import { ICustomer } from './ICustomer';
import { IProduct } from './IProduct';

export interface IOrder {
  id: string;
  orderDate: string;
  customer: ICustomer;
  orderItems: IProduct[];
}
