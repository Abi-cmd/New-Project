import { FarmerWhereUniqueInput } from "../farmer/FarmerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProduceWhereInput = {
  farmer?: FarmerWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  pricePerUnit?: FloatNullableFilter;
  quantity?: IntNullableFilter;
};
