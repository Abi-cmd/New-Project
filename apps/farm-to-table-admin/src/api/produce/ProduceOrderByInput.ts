import { SortOrder } from "../../util/SortOrder";

export type ProduceOrderByInput = {
  createdAt?: SortOrder;
  farmerId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  pricePerUnit?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
