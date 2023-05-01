import { StringFilter } from "../../util/StringFilter";

export type AccountWhereInput = {
  accType?: StringFilter;
  id?: StringFilter;
  tokenId?: StringFilter;
};
