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
          I am { this.props.suppliers.length > 0 && this.props.suppliers[0] }
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
