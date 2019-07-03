import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, crudUpdateMany } from 'react-admin';
import { showNotification, CREATE } from 'react-admin';
import dataProvider from '../dataProvider/dataProvider';

class SyncBalancesButton extends Component {
  handleClick = () => {
    const { selectedIds } = this.props;
    dataProvider(CREATE, 'balances/sync', { data: selectedIds })
      .then(() => {
        showNotification('Balances synced');
      })
      .catch((e) => {
        showNotification('Error: could not sync balances', 'warning')
      });
  };

  render() {
    return (
      <Button label="Sync" onClick={this.handleClick} />
    );
  }
}

export default connect(undefined, { crudUpdateMany })(SyncBalancesButton);
