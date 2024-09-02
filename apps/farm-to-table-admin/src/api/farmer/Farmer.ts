import { Produce } from "../produce/Produce";

export type Farmer = {
  createdAt: Date;
  email: string | null;
  id: string;
  location: string | null;
  name: string | null;
  phoneNumber: string | null;
  produces?: Array<Produce>;
  updatedAt: Date;
};
