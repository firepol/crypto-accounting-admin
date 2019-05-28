import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, crudUpdateMany } from 'react-admin';
import { showNotification, CREATE } from 'react-admin';
import dataProvider from './dataProvider';

class AssociateTradesButton extends Component {
  handleClick = () => {
    const { selectedIds } = this.props;
    dataProvider(CREATE, 'trades/associate', { data: selectedIds })
      .then(() => {
        showNotification('Trades associated');
      })
      .catch((e) => {
        showNotification('Error: could not associate trades', 'warning')
      });
  };

  render() {
    return (
      <Button label="Associate" onClick={this.handleClick} />
    );
  }
}

export default connect(undefined, { crudUpdateMany })(AssociateTradesButton);
