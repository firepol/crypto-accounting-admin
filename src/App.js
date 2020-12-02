import React from 'react';
import {Admin, Resource, EditGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import {AccountCreate, AccountEdit, AccountList} from './accounts/accounts';
import {BalanceList, BalanceEdit, BalanceCreate} from './balances/balances';
import {TransactionList} from './transactions/transactions';
import {TradeEdit, TradeList} from './trades/trades';
import {CurrencyEdit, CurrencyList} from './currencies/currencies';

import customRoutes from './customRoutes';

let baseUrl = 'http://127.0.0.1:5000/api';

const dataProvider = jsonServerProvider(baseUrl);
const App = () => (
  <Admin title="Crypto Accounting" dataProvider={dataProvider} customRoutes={customRoutes}>
    <Resource name="accounts" list={AccountList} edit={AccountEdit} create={AccountCreate}/>
    <Resource name="balances" list={BalanceList} edit={BalanceEdit} create={BalanceCreate}/>
    <Resource name="trades" list={TradeList} edit={TradeEdit}/>
    <Resource name="transactions" list={TransactionList}/>
    <Resource name="currencies" list={CurrencyList} edit={CurrencyEdit}/>
  </Admin>
);

export default App;
