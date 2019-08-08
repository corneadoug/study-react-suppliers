import React from 'react';
import { connect } from 'react-redux';
import { saveBankData } from '../actions/bankDataActions';
import './ModalContent.css';

class ModalContent extends React.Component {
  render() {
    return (
        <div>
            <h2>{this.props.supplier ? (this.props.supplier.name) : ('')}</h2>
            <form>
                <input />
                <input />
            </form>
            <button onClick={this.props.closeModal}>close</button>
            <button onClick={this.props.closeModal}>save</button>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    bankdata: state.bankdata
});
  
const mapActionsToProps = {
    onSaveBankData: saveBankData
};
  
export default connect(mapStateToProps, mapActionsToProps)(ModalContent);
