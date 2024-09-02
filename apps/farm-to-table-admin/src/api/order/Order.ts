import { Customer } from "../customer/Customer";
import { Payment } from "../payment/Payment";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  orderDate: Date | null;
  payments?: Array<Payment>;
  totalAmount: number | null;
  updatedAt: Date;
};
