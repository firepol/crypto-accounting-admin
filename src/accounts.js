import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const AccountList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="type" />
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
