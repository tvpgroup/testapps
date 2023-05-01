import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  accType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  tokenId?: SortOrder;
  updatedAt?: SortOrder;
};
