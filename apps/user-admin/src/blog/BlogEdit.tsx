import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BlogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" source="content" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
