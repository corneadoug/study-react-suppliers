import React from 'react';
import { connect } from 'react-redux';
import { fetchSuppliers } from './actions/suppliersActions';
import SupplierRenderer from './components/SupplierRenderer';
import ModalContent from './components/ModalContent';
import './App.css';
import Modal from 'react-modal';
import customStyles from './assets/modalStyle';

Modal.setAppElement('#root');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      selectedSupplier: null
    }
  }

  componentDidMount() {
    this.props.onFetchSuppliers();
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  openModal = (supplier) => {
    this.setState({modalIsOpen: true, selectedSupplier: supplier});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Suppliers Ranking</h2>
          <div className="suppliersRankList">
            {this.props.suppliers.map((supplier, index) => (
              <SupplierRenderer onClick={() => this.openModal(supplier)} supplier={supplier} rank={index + 1} key={supplier.key} />
            ))}
          </div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
          >
            <ModalContent supplier={this.state.selectedSupplier} closeModal={this.closeModal} />
          </Modal>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  suppliers: state.suppliers,
  bankData: state.bankData
});

const mapActionsToProps = {
  onFetchSuppliers: fetchSuppliers
};

export default connect(mapStateToProps, mapActionsToProps)(App);
