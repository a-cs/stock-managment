import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import ItemsList from '../pages/ItemsList';
import TransactionsList from '../pages/TransactionsList';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/Estoque" component={ItemsList} isPrivate />
    <Route path="/Movimentações" component={TransactionsList} isPrivate />
  </Switch>
);

export default Routes;
