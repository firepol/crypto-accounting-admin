import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, crudUpdateMany } from 'react-admin';
import { showNotification, CREATE } from 'react-admin';
import dataProvider from '../dataProvider/dataProvider';

class DeassociateTradesButton extends Component {
  handleClick = () => {
    const { selectedIds } = this.props;
    dataProvider(CREATE, 'trades/deassociate', { data: selectedIds })
      .then(() => {
        showNotification('Trades de-associated');
      })
      .catch((e) => {
        showNotification('Error: could not de-associate trades', 'warning')
      });
  };

  render() {
    return (
      <Button label="De-associate" onClick={this.handleClick} />
    );
  }
}

export default connect(undefined, { crudUpdateMany })(DeassociateTradesButton);
