import React, { Fragment }  from 'react';
import AssociateTradesButton from './AssociateTradesButton';
import SealTradesButton from './SealTradesButton';
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
  BooleanInput,
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput
} from 'react-admin';

const PostBulkActionButtons = props => (
  <Fragment>
    {/* Add the default bulk delete action */}
    <AssociateTradesButton {...props} />
    <SealTradesButton {...props} />
  </Fragment>
);

const TradeFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <TextInput label="Base" source="base" />
    <TextInput label="Quote" source="quote" />
    <TextInput label="From" source="from_datetime" />
    <TextInput label="To" source="to_datetime" />
    <TextInput label="Trade types" source="trade_types" />
    <TextInput label="Account IDs" source="account_ids" />
    <ReferenceInput label="Account" source="account_id" reference="accounts" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const TradeList = props => (
  <List filters={<TradeFilter/>} {...props} bulkActionButtons={<PostBulkActionButtons />} perPage={20}>
    <Datagrid rowClick="edit">
      <TextField source="id"/>
      <DateField source="datetime" showTime/>
      <TextField source="identifier"/>
      <TextField source="side"/>
      <TextField source="base"/>
      <TextField source="quote"/>
      <NumberField source="amount"/>
      <NumberField source="price" options={{ maximumFractionDigits: 8 }}/>
      <NumberField source="cost" options={{ maximumFractionDigits: 8 }}/>
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
