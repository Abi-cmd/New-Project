import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  businessLocation?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  orderDate?: Date | null;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
  totalAmount?: number | null;
  trackingMethod?: string | null;
};
