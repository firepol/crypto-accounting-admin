import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, crudUpdateMany } from 'react-admin';
import { showNotification, CREATE } from 'react-admin';
import dataProvider from './dataProvider';

class SyncTradesButton extends Component {
  handleClick = () => {
    const { selectedIds } = this.props;
    dataProvider(CREATE, 'trades/sync', { data: selectedIds })
      .then(() => {
        showNotification('Trades synced');
      })
      .catch((e) => {
        showNotification('Error: could not sync trades', 'warning')
      });
  };

  render() {
    return (
      <Button label="Sync" onClick={this.handleClick} />
    );
  }
}

export default connect(undefined, { crudUpdateMany })(SyncTradesButton);
