import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  ReferenceField,
  Filter,
  TextInput,
  ReferenceInput,
  AutocompleteInput,
} from 'react-admin';

const TransactionFilter = (props) => (
  <Filter {...props}>
    {/*<TextInput label="Search" source="q" alwaysOn/>*/}
    <TextInput label="Currency" source="currency"/>
    <TextInput label="From" source="from_datetime"/>
    <TextInput label="To" source="to_datetime"/>
    <TextInput label="Trade types" source="trade_types"/>
    <TextInput label="Account IDs" source="account_ids"/>
    <ReferenceInput source="account_id" reference="accounts" sort={{ field: 'name', order: 'ASC' }} perPage={999}>
      <AutocompleteInput source="name" />
    </ReferenceInput>
  </Filter>
);

export const TransactionList = props => (
  <List filters={<TransactionFilter/>} {...props} perPage={100}>
    <Datagrid rowClick="edit">
      <TextField source="id"/>
      <DateField source="datetime" showTime/>
      <TextField source="type"/>
      <NumberField source="amount"/>
      <TextField source="currency"/>
      <ReferenceField source="account_id" reference="accounts">
        <TextField source="name"/>
      </ReferenceField>
    </Datagrid>
  </List>
);
