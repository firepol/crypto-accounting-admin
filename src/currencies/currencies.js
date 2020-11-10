import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  BooleanInput,
  Filter,
  TextInput,
  EditButton, Edit, SimpleForm, ReferenceField, NumberField
} from 'react-admin';

const CurrencyFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

export const CurrencyList = props => (
  <List filters={<CurrencyFilter/>} {...props} perPage={100} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid rowClick="edit">
      <TextField source="name" />
      <TextField source="slug" />
      <TextField source="symbol" />
      <EditButton/>
    </Datagrid>
  </List>
);

export const CurrencyEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="name" />
      <TextField source="slug" />
      <TextField source="symbol" />
      <BooleanInput source="is_fiat"/>
      <BooleanInput source="is_used"/>
    </SimpleForm>
  </Edit>
);
