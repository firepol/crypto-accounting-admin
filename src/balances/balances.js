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
  SelectInput,
  TopToolbar,
  RefreshButton,
  SimpleForm,
  Edit,
  Create,
  DateInput,
  NumberInput,
  CreateButton
} from 'react-admin';
import SyncBalancesButton from "./SyncBalancesButton";
import Typography from '@material-ui/core/Typography';

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
  </div>
);

export const BalanceList = props => (
  <List aside={<Aside />} filters={<BalanceFilter/>} actions={<BalanceActions/>} {...props} perPage={-1}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="date" />
      <ReferenceField source="account_id" reference="accounts">
        <TextField source="name"/>
      </ReferenceField>
      {/*<ReferenceField source="currency_id" reference="currencies">*/}
      {/*  <TextField source="name"/>*/}
      {/*</ReferenceField>*/}
      {/*<ReferenceField source="currency_id" reference="currencies">*/}
      {/*  <TextField source="symbol"/>*/}
      {/*</ReferenceField>*/}
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
      <ReferenceInput source="account_id" reference="accounts">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceField source="currency_id" reference="currencies">
        <SelectInput optionText="name" />
      </ReferenceField>
      <NumberInput source="used" />
      <NumberInput source="free" />
      <NumberInput source="total" />
    </SimpleForm>
  </Edit>
);

export const BalanceCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="account_id" reference="accounts">
        <SelectInput optionText="name" />
      </ReferenceInput>
      {/*<ReferenceField source="currency_id" reference="currencies">*/}
      {/*  <SelectInput optionText="name" />*/}
      {/*</ReferenceField>*/}
      <NumberInput source="currency_id" />
      <NumberInput source="used" />
      <NumberInput source="free" />
      <NumberInput source="total" />
    </SimpleForm>
  </Create>
);
