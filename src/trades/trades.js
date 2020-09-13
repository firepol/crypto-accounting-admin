import React, { Fragment }  from 'react';
import AssociateTradesButton from './AssociateTradesButton';
import DeassociateTradesButton from './DeassociateTradesButton';
import SealTradesButton from './SealTradesButton';
import SyncTradesButton from './SyncTradesButton';
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
  BooleanInput,
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput,
  CardActions,
  CreateButton,
  RefreshButton,
  ExportButton,
} from 'react-admin';

const TradeBulkActionButtons = props => (
  <Fragment>
    {/* Add the default bulk delete action */}
    <AssociateTradesButton {...props} />
    <DeassociateTradesButton {...props} />
    <SealTradesButton {...props} />
  </Fragment>
);

const TradeActions = ({
                       bulkActions,
                       basePath,
                       currentSort,
                       displayedFilters,
                       exporter,
                       filters,
                       filterValues,
                       onUnselectItems,
                       resource,
                       selectedIds,
                       showFilter,
                       total
                     }) => (
  <CardActions>
    {bulkActions && React.cloneElement(bulkActions, {
      basePath,
      filterValues,
      resource,
      selectedIds,
      onUnselectItems,
    })}
    {filters && React.cloneElement(filters, {
      resource,
      showFilter,
      displayedFilters,
      filterValues,
      context: 'button',
    }) }
    <CreateButton basePath={basePath} />
    <ExportButton
      disabled={total === 0}
      resource={resource}
      sort={currentSort}
      filter={filterValues}
      exporter={exporter}
    />
    <RefreshButton />
    <SyncTradesButton />
  </CardActions>
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

const BooleanShowTrueOnlyField = ({ record, ...props }) => {
  return record && record[props.source]
    ? <BooleanField source={props.source} record={record} {...props} />
    : null;
}

export const TradeList = props => (
  <List filters={<TradeFilter/>} {...props} bulkActionButtons={<TradeBulkActionButtons />} actions={<TradeActions/>}
        perPage={100} sort={{ field: 'datetime', order: 'DESC' }}>
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
      <BooleanShowTrueOnlyField source="sealed"/>
      <TextField source="comment"/>
      <BooleanShowTrueOnlyField source="todo"/>
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
      <TextInput disabled source="side"/>
      <TextInput disabled source="base"/>
      <TextInput disabled source="quote"/>
      <TextInput disabled source="amount"/>
      <TextInput disabled source="price"/>
      <TextInput disabled source="cost"/>
      <TextInput disabled source="datetime"/>
      <TextField source="identifier"/>
      <TextInput disabled source="detected_trade_type"/>
      <BooleanInput source="sealed"/>
      <NumberField source="trade_type"/>
      <TextInput multiline source="comment"/>
      <BooleanInput source="todo"/>
    </SimpleForm>
  </Edit>
);
