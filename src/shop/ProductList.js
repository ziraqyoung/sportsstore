import React, { Component } from "react";

export class ProductList extends Component {
  render() {
    if (this.props.products == null || this.props.products.length === 0) {
      return <h4 className="p-2">No Products</h4>;
    }

    return this.props.products.map((p) => (
      <div className="card m-1 p-1 bg-light" key={p.id}>
        <h4>
          {p.name}
          <span
            key={p.id}
            className="badge badge-pill badge-primary float-right"
          >
            ${p.price.toFixed(2)}
          </span>
        </h4>
        <div className="card-text bg-white p-1">
          {p.description}
          <button
            onClick={() => this.props.addToCart(p)}
            className="btn btn-success btn-sm float-right"
          >
            Add To Cart
          </button>
        </div>
      </div>
    ));
  }
}
