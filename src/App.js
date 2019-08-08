import React from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { fetchSuppliers } from './actions/suppliersActions';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.onFetchSuppliers();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Suppliers App</h2>
          <div className="suppliersRankList">
            {this.props.suppliers.map((supplier, index) => (
              <div key={supplier.key}>
                <div>{supplier.name} {index + 1}</div>
                <div>{supplier.average_transaction_amount}</div>
              </div>
            ))}
          </div>
          <button onClick={this.props.onFetchSuppliers}>toto</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  suppliers: state.suppliers
});

const mapActionsToProps = {
  onFetchSuppliers: fetchSuppliers
};

export default connect(mapStateToProps, mapActionsToProps)(App);
