import { Produce as TProduce } from "../api/produce/Produce";

export const PRODUCE_TITLE_FIELD = "name";

export const ProduceTitle = (record: TProduce): string => {
  return record.name?.toString() || String(record.id);
};
