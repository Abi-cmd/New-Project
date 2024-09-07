import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { FarmerTitle } from "../farmer/FarmerTitle";

export const ProduceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="farmer.id" reference="Farmer" label="farmer">
          <SelectInput optionText={FarmerTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <NumberInput label="pricePerUnit" source="pricePerUnit" />
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Edit>
  );
};
