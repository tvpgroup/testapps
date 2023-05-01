import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AccType" source="accType" />
        <TextInput label="TokenID" source="tokenId" />
      </SimpleForm>
    </Create>
  );
};
