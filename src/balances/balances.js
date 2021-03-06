import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DateField,
  NumberField,
  ReferenceField,
  Filter,
  TextInput,
  ReferenceInput,
  TopToolbar,
  RefreshButton,
  SimpleForm,
  Edit,
  Create,
  DateInput,
  NumberInput,
  CreateButton,
  AutocompleteInput,
} from 'react-admin';
import SyncBalancesButton from "./SyncBalancesButton";
import Typography from '@material-ui/core/Typography';

const BalanceFilter = (props) => (
  <Filter {...props}>
    {/*<TextInput label="Search" source="q" alwaysOn />*/}
    <TextInput label="Currency" source="currency" perPage={999} />
    <TextInput label="Account IDs" source="account_ids" />
    <ReferenceInput label="Account" source="account_id" reference="accounts" perPage={999} allowEmpty>
      <AutocompleteInput source="name"  />
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
  <TopToolbar>
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
    <CreateButton basePath={basePath} />
  </TopToolbar>
);

const Aside = ({ data, ids })  => (
  <div style={{ width: 200, margin: '1em' }}>
    <Typography variant="body1">
      Value in US$: {ids.map(id => data[id]).reduce((sum, balance) => Number((sum + balance.total_value).toFixed(1)), 0)}
    </Typography>
    <Typography variant="body1">
      Coins hodled: {ids.map(id => data[id]).reduce((sum, balance) => Number((sum + balance.total).toFixed(1)), 0)}
    </Typography>
  </div>
);

export const BalanceList = props => (
  <List aside={<Aside />} filters={<BalanceFilter/>} actions={<BalanceActions/>} {...props} perPage={500}>
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
      <EditButton/>
    </Datagrid>
  </List>
);

export const BalanceEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <DateInput source="date" />
      <ReferenceInput source="account_id" reference="accounts" sort={{ field: 'name', order: 'ASC' }} perPage={999}>
        <AutocompleteInput source="name" />
      </ReferenceInput>
      <ReferenceInput label="Currency" source="currency_id" reference="currencies" perPage={999}>
        <AutocompleteInput source="currency_id" />
      </ReferenceInput>
      <NumberInput source="used" />
      <NumberInput source="free" />
      <NumberInput source="total" />
    </SimpleForm>
  </Edit>
);

export const BalanceCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="account_id" reference="accounts" sort={{ field: 'name', order: 'ASC' }} perPage={999}>
        <AutocompleteInput source="name" />
      </ReferenceInput>
      <ReferenceInput label="Currency" source="currency_id" reference="currencies" perPage={999}>
        <AutocompleteInput source="currency_id" />
      </ReferenceInput>
      <NumberInput source="used" />
      <NumberInput source="free" />
      <NumberInput source="total" />
    </SimpleForm>
  </Create>
);
