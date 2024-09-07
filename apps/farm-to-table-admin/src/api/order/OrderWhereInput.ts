import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  businessLocation?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  payments?: PaymentListRelationFilter;
  totalAmount?: FloatNullableFilter;
  trackingMethod?: StringNullableFilter;
};
