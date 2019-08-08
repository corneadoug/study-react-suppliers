import React from 'react';
import { connect } from 'react-redux';
import { fetchSuppliers } from './actions/suppliersActions';
import SupplierRenderer from './components/SupplierRenderer';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.onFetchSuppliers();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Suppliers Ranking</h2>
          <div className="suppliersRankList">
            {this.props.suppliers.map((supplier, index) => (
              <SupplierRenderer supplier={supplier} rank={index + 1} key={supplier.key} />
            ))}
          </div>
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
