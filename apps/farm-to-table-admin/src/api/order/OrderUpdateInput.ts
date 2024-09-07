import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  businessLocation?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  orderDate?: Date | null;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  totalAmount?: number | null;
  trackingMethod?: string | null;
};
