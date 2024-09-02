import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";

export type ProduceUpdateInput = {
  farmer?: FarmerWhereUniqueInput | null;
  name?: string | null;
  pricePerUnit?: number | null;
  quantity?: number | null;
};
