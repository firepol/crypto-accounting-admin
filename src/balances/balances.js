import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  ReferenceField,
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput,
  CardActions,
  RefreshButton
} from 'react-admin';
import SyncBalancesButton from "./SyncBalancesButton";

const BalanceFilter = (props) => (
  <Filter {...props}>
    {/*<TextInput label="Search" source="q" alwaysOn />*/}
    <TextInput label="Currency" source="currency" />
    <TextInput label="Account IDs" source="account_ids" />
    <ReferenceInput label="Account" source="account_id" reference="accounts" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

const BalanceActions = ({
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
    <RefreshButton />
    <SyncBalancesButton />
  </CardActions>
);

export const BalanceList = props => (
  <List filters={<BalanceFilter/>} actions={<BalanceActions/>} {...props} perPage={-1}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="date" />
      <ReferenceField source="account_id" reference="accounts">
        <TextField source="name"/>
      </ReferenceField>
      <TextField source="currency.name" label="Currency" />
      <TextField source="currency.symbol" label="Symbol" />
      <NumberField source="used" options={{ maximumFractionDigits: 4 }} />
      <NumberField source="free" options={{ maximumFractionDigits: 4 }} />
      <NumberField source="total" options={{ maximumFractionDigits: 4 }} />
      <NumberField source="total_value" options={{ maximumFractionDigits: 2 }} />
    </Datagrid>
  </List>
);
