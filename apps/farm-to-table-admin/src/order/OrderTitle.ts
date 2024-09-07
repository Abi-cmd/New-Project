import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "businessLocation";

export const OrderTitle = (record: TOrder): string => {
  return record.businessLocation?.toString() || String(record.id);
};
