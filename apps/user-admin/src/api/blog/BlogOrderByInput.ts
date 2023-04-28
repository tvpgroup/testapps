import { SortOrder } from "../../util/SortOrder";

export type BlogOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
