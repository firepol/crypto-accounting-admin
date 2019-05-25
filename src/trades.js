import React from 'react';
import {
  List, Datagrid,
  TextField,
  NumberField,
  DateField,
  BooleanField,
  ReferenceField,
  EditButton,
  SimpleForm,
  Edit,
  LongTextInput,
  DisabledInput,
  BooleanInput
} from 'react-admin';

export const TradeList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id"/>
      <DateField source="datetime" showTime/>
      <TextField source="identifier"/>
      <TextField source="side"/>
      <TextField source="base"/>
      <TextField source="quote"/>
      <NumberField source="amount"/>
      <NumberField source="price"/>
      <NumberField source="cost"/>
      <NumberField source="detected_trade_type"/>
      <NumberField source="trade_type"/>
      <BooleanField source="sealed"/>
      <TextField source="comment"/>
      <BooleanField source="todo"/>
      <ReferenceField source="account_id" reference="accounts">
        <TextField source="name"/>
      </ReferenceField>
      <EditButton/>
    </Datagrid>
  </List>
);

export const TradeEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceField source="account_id" reference="accounts">
        <TextField source="name"/>
      </ReferenceField>
      <DisabledInput source="side"/>
      <DisabledInput source="base"/>
      <DisabledInput source="quote"/>
      <DisabledInput source="amount"/>
      <DisabledInput source="price"/>
      <DisabledInput source="cost"/>
      <DisabledInput source="datetime"/>
      <TextField source="identifier"/>
      <DisabledInput source="detected_trade_type"/>
      <BooleanInput source="sealed"/>
      <NumberField source="trade_type"/>
      <LongTextInput source="comment"/>
      <BooleanInput source="todo"/>
    </SimpleForm>
  </Edit>
);
