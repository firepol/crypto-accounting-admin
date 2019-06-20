import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Filter,
  TextInput,
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
    </Datagrid>
  </List>
);
