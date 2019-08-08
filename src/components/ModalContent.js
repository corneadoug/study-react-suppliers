import React from 'react';
import { connect } from 'react-redux';
import { saveBankData } from '../actions/bankDataActions';
import './ModalContent.css';

class ModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        iban: '',
        swift: ''
    };
  }

  componentDidMount() {
    if (this.props.bankData[this.props.supplier.key]) {
        this.updateIban(this.props.bankData[this.props.supplier.key].iban);
        this.updateSwift(this.props.bankData[this.props.supplier.key].swift);
    }
  }

  updateIban = (val) => {
      this.setState({iban: val});
  }

  updateSwift = (val) => {
    this.setState({swift: val});
  }

  onIbanChange = (evt) => {
    this.updateIban(evt.target.value);
  }

  onSwiftChange = (evt) => {
    this.updateSwift(evt.target.value);
  }

  onSaveBankData = () => {
    this.props.onSaveBankData(
        this.props.supplier.key,
        {iban: this.state.iban, swift: this.state.swift}
    );
    this.props.closeModal();
  }

  render() {
    return (
        <div>
            <h2>{this.props.supplier ? (this.props.supplier.name) : ('')}</h2>
            <form>
                <div>IBAN</div>
                <div><input value={this.state.iban} onChange={this.onIbanChange}/></div>
                <div>BIC/SWIFT</div>
                <div><input value={this.state.swift} onChange={this.onSwiftChange}/></div>
            </form>
            <button onClick={this.props.closeModal}>close</button>
            <button onClick={this.onSaveBankData}>save</button>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    bankData: state.bankData
});
  
const mapActionsToProps = {
    onSaveBankData: saveBankData
};
  
export default connect(mapStateToProps, mapActionsToProps)(ModalContent);
