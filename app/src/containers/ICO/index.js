import React from 'react';

import { connect } from 'react-redux';

import { CurrencyTable } from '../../components';
import { icoAmountsInEuro } from '../../data/selectors';

const ico = props => (
  <React.Fragment>
    <h1> ICO</h1>
    <CurrencyTable data={props.icoAmountsInEuro} />
  </React.Fragment>
);

const mapStateToProps = state => {
  return {
    icoAmountsInEuro: icoAmountsInEuro(state),
  };
};

export default connect(mapStateToProps, undefined)(ico);
