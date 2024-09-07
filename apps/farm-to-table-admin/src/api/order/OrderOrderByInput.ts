import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  businessLocation?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  totalAmount?: SortOrder;
  trackingMethod?: SortOrder;
  updatedAt?: SortOrder;
};
