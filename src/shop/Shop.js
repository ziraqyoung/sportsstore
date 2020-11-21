import React, { Component } from "react";

import { ProductList } from "./ProductList";
import { CategoryNavigation } from "./CategoryNavigation";
import { CartSummary } from "./CartSummary";

export default class Shop extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col bg-dark text-white">
            <div className="navbar-brand font-weight-bold">SPORTS STORE</div>
            <CartSummary {...this.props} />
          </div>
        </div>

        <div className="row">
          <div className="col-3 p-2">
            <CategoryNavigation
              baseUrl="/shop/products"
              categories={this.props.categories}
            />
          </div>

          <div className="col-9 p-2">
            <ProductList products={this.props.products} addToCart={ this.props.addToCart } />
          </div>
        </div>
      </div>
    );
  }
}
