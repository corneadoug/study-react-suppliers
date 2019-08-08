import React from 'react';
import './SupplierRenderer.css';

class SupplierRenderer extends React.Component {

  roundNumber = (nb) => {
    return parseFloat(nb).toFixed(2);
  }

  render() {
    return (
      <div className="supplierRenderer">
        <div>
          <img className="logo" src={this.props.supplier.logo_url} alt="logo" />
        </div>
        <div className="centerPart">
          <div>{this.props.supplier.name}</div>
          <div>{this.roundNumber(this.props.supplier.average_transaction_amount)}€</div>
        </div>
        <div className="rank">#{this.props.rank}</div>
      </div>
    );
  }
}

export default SupplierRenderer;
