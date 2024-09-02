import { ProduceUpdateManyWithoutFarmersInput } from "./ProduceUpdateManyWithoutFarmersInput";

export type FarmerUpdateInput = {
  email?: string | null;
  location?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  produces?: ProduceUpdateManyWithoutFarmersInput;
};
