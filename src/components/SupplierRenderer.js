import React from 'react';
import './SupplierRenderer.css';

class SupplierRenderer extends React.Component {

  roundNumber = (nb) => {
    return parseFloat(nb).toFixed(2);
  }

  render() {
    return (
      <div className="supplierRendererContainer">
        <div className="supplierRenderer" onClick={this.props.onClick}>
          <div>
            <img className="logo" src={this.props.supplier.logo_url} alt="logo" />
          </div>
          <div className="centerPart">
            <div>{this.props.supplier.name}</div>
            <div>{this.roundNumber(this.props.supplier.average_transaction_amount)}€</div>
          </div>
          <div className="rank">#{this.props.rank}</div>
        </div>
        <div className="tagContainer">
          {this.props.supplier.categories.map((category, index) => (
            category ? <div className="category" key={category}>{category}</div> : ''
          ))}
        </div>
      </div>
    );
  }
}

export default SupplierRenderer;
