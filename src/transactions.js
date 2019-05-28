import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField, ReferenceField } from 'react-admin';

export const TransactionList = props => (
  <List {...props} perPage={20}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="datetime" showTime />
      <TextField source="type" />
      <NumberField source="amount" />
      <TextField source="currency" />
      <ReferenceField source="account_id" reference="accounts">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);
