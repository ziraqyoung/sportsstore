import React, { Component } from "react";
import { Link } from "react-router-dom";

import { CartDetailsRow } from "./CartDetailsRow";

export class CartDetails extends Component {
  getLinkClasses = () => `btn btn-secondary m-1 
    ${!this.props.cartItems || this.props.cartItems === 0 ? "disabled" : ""}`;

  render() {
    return (
      <div className="m-3">
        <h2 className="text-center">You Cart</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Product</th>
              <th className="text-center">Price</th>
              <th className="text-center">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <CartDetailsRow
              cart={this.props.cart}
              cartPrice={this.props.cartPrice}
              updateQuantity={this.props.updateCartQuantity}
              removeFromCart={this.props.removeFromCart}
            />
          </tbody>
        </table>

        <div className="text-center">
          <Link to="/shop" className="btn btn-primary m-1">
            Continue Shopping
          </Link>
          <Link to="/shop/checkout" className={this.getLinkClasses()}>
            Checkout
          </Link>
        </div>
      </div>
    );
  }
}
