import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  phoneNumber?: string | null;
};
