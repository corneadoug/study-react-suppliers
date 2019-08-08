import React from 'react';
import { connect } from 'react-redux';
import { fetchSuppliers } from './actions/suppliersActions';
import SupplierRenderer from './components/SupplierRenderer';
import './App.css';
import Modal from 'react-modal';

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
    console.log('openModalll');
    this.setState({modalIsOpen: true});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Suppliers Ranking</h2>
          <div className="suppliersRankList">
            {this.props.suppliers.map((supplier, index) => (
              <SupplierRenderer onClick={this.openModal} supplier={supplier} rank={index + 1} key={supplier.key} />
            ))}
          </div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
            <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
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
