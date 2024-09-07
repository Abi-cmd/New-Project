import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  phoneNumber?: string | null;
};
