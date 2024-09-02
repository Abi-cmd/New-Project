import { ProduceWhereInput } from "./ProduceWhereInput";
import { ProduceOrderByInput } from "./ProduceOrderByInput";

export type ProduceFindManyArgs = {
  where?: ProduceWhereInput;
  orderBy?: Array<ProduceOrderByInput>;
  skip?: number;
  take?: number;
};
