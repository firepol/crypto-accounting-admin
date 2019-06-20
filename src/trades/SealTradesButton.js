import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, crudUpdateMany } from 'react-admin';
import { showNotification, CREATE } from 'react-admin';
import dataProvider from '../dataProvider/dataProvider';

class SealTradesButton extends Component {
  handleClick = () => {
    const { selectedIds } = this.props;
    dataProvider(CREATE, 'trades/seal', { data: selectedIds })
      .then(() => {
        showNotification('Trades sealed');
      })
      .catch((e) => {
        showNotification('Error: could not seal trades', 'warning')
      });
  };

  render() {
    return (
      <Button label="Seal" onClick={this.handleClick} />
    );
  }
}

export default connect(undefined, { crudUpdateMany })(SealTradesButton);
