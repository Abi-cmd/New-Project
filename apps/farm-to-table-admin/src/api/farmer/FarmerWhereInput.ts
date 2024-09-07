import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProduceListRelationFilter } from "../produce/ProduceListRelationFilter";

export type FarmerWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  produces?: ProduceListRelationFilter;
};
