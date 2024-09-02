import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";

export type ProduceCreateInput = {
  farmer?: FarmerWhereUniqueInput | null;
  name?: string | null;
  pricePerUnit?: number | null;
  quantity?: number | null;
};
