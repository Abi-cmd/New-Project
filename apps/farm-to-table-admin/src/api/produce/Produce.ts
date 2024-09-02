import { Farmer } from "../farmer/Farmer";

export type Produce = {
  createdAt: Date;
  farmer?: Farmer | null;
  id: string;
  name: string | null;
  pricePerUnit: number | null;
  quantity: number | null;
  updatedAt: Date;
};
