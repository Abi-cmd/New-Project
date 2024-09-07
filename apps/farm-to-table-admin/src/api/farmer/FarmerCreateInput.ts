import { ProduceCreateNestedManyWithoutFarmersInput } from "./ProduceCreateNestedManyWithoutFarmersInput";

export type FarmerCreateInput = {
  email?: string | null;
  location?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  produces?: ProduceCreateNestedManyWithoutFarmersInput;
};
