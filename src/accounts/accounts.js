import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  TextInput,
} from 'react-admin';

export const AccountList = props => (
  <List {...props} perPage={50}>
    <Datagrid rowClick="edit">
      <TextField source="id"/>
      <TextField source="type"/>
      <TextField source="name"/>
      <TextField source="description"/>
      <EditButton/>
    </Datagrid>
  </List>
);

export const AccountEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id"/>
      <TextInput source="name"/>
      <TextInput source="type"/>
      <TextInput multiline source="description"/>
    </SimpleForm>
  </Edit>
);

export const AccountCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name"/>
      <TextInput source="type"/>
      <TextInput multiline source="description"/>
    </SimpleForm>
  </Create>
);
