import React from 'react';
import {Admin, Resource, ListGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { AccountList } from './accounts';
import { TransactionList } from './transactions';
import { TradeList } from './trades';

const dataProvider = jsonServerProvider('http://127.0.0.1:5000/api');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="accounts" list={AccountList}/>
    <Resource name="trades" list={TradeList}/>
    <Resource name="transactions" list={TransactionList}/>
  </Admin>
);

export default App;
