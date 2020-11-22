import React, { Component } from "react";

export class CartDetailsRow extends Component {
  handleChange = (product, event) => {
    this.props.updateQuantity(product, event.target.value)
  }

  render() {
    if (!this.props.cart || this.props.cart.length === 0) {
      return (
        <tr>
          <td colSpan="5">Your cart is currently empty</td>
        </tr>
      );
    } else {
      return (
        <>
          {this.props.cart.map((item) => (
            <tr key={item.product.id}>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(ev) => this.handleChange(item.product, ev)}
                />
              </td>
              <td>{item.product.name}</td>
              <td>${item.product.price.toFixed(2)}</td>
              <td>${item.product.price * item.quantity}</td>
              <td>
                <button
                  onClick={() => this.props.removeFromCart(item.product)}
                  className="btn btn-sm btn-danger"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <td colSpan="3" className="text-right">
              Total:
            </td>
            <td colSpan="2" className="text-right">
              ${this.props.cartPrice.toFixed(2)}
            </td>
          </tr>
        </>
      );
    }
  }
}
