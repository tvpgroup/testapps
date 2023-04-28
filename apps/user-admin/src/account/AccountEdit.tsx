import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AccType" source="accType" />
        <TextInput label="TokenID" source="tokenId" />
      </SimpleForm>
    </Edit>
  );
};
