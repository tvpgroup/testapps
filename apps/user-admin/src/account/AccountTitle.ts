import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "accType";

export const AccountTitle = (record: TAccount): string => {
  return record.accType || String(record.id);
};
