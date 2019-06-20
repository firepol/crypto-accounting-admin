import React from 'react';
import {Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {AccountCreate, AccountEdit, AccountList} from './accounts/accounts';
import {TransactionList} from './transactions/transactions';
import {TradeEdit, TradeList} from './trades/trades';

const dataProvider = jsonServerProvider('http://127.0.0.1:5000/api');
const App = () => (
  <Admin title="Crypto Accounting" dataProvider={dataProvider}>
    <Resource name="accounts" list={AccountList} edit={AccountEdit} create={AccountCreate}/>
    <Resource name="trades" list={TradeList} edit={TradeEdit}/>
    <Resource name="transactions" list={TransactionList}/>
  </Admin>
);

export default App;
