import React from 'react';
import { connect } from 'react-redux';
import { saveBankData } from '../actions/bankDataActions';
import './ModalContent.css';

class ModalContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        iban: '',
        swift: '',
        errorIban: false,
        errorSwift: false,
        errorIbanMsg: '',
        errorSwiftMsg: ''
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
    let newVal = evt.target.value;
    // Validation
    if (!newVal || newVal === '') {
        this.setState({errorIban: true, errorIbanMsg: 'IBAN is required'});
    } else {
        let pattern = /^FR[0-9]{25}$/i
        if (pattern.test(newVal)) {
            this.setState({errorIban: false, errorIbanMsg: ''});
        } else {
            this.setState({errorIban: true, errorIbanMsg: 'IBAN should be FR followed by 25 numbers'});
        }
    }
    this.updateIban(newVal);
  }

  onSwiftChange = (evt) => {
    let newVal = evt.target.value;
    // Validation
    if (!newVal || newVal === '') {
        this.setState({errorSwift: true, errorSwiftMsg: 'Swift is required'});
    } else {
        let pattern = /^[A-Z0-9]{9}$/i
        let otherpattern = /^[A-Z0-9]{11}$/i
        if (pattern.test(newVal) || otherpattern.test(newVal)) {
            this.setState({errorSwift: false, errorSwiftMsg: ''});
        } else {
            this.setState({errorSwift: true, errorSwiftMsg: 'Invalid BIC/SWIFT'});
        }
    }
    this.updateSwift(newVal);
  }

  onSaveBankData = () => {
    if (!this.state.errorIban || !this.state.errorSwift) {
        this.props.onSaveBankData(
            this.props.supplier.key,
            {iban: this.state.iban, swift: this.state.swift}
        );
        this.props.closeModal();
    }
  }

  render() {

    let isDisabled = this.state.iban === '' || this.state.iban === '' ? true :
                        this.state.errorIban || this.state.errorSwift ? true : false;
    return (
        <div>
            <h2>{this.props.supplier ? (this.props.supplier.name) : ('')}</h2>
            <form>
                <div className="inputContainer">
                    <div>IBAN</div>
                    <div><input value={this.state.iban} onChange={this.onIbanChange}/></div>
                    <div className="errorMsg">{this.state.errorIbanMsg}</div>
                </div>
                <div className="inputContainer">
                    <div>BIC/SWIFT</div>
                    <div><input value={this.state.swift} onChange={this.onSwiftChange}/></div>
                    <div className="errorMsg">{this.state.errorSwiftMsg}</div>
                </div>
            </form>
            <div className="btnContainer">
                <button className="modalBtn" onClick={this.props.closeModal}>close</button>
                <button className="modalBtn saveBtn" disabled={isDisabled} onClick={this.onSaveBankData}>save</button>
            </div>
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
