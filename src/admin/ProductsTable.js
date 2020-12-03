import React, { Component } from "react";
import { Link } from "react-router-dom";

import { PaginationControls } from "../PaginationControls";
import { ProductsRow } from "./ProductsRow";

export class ProductsTable extends Component {
  render = () => (
    <div>
      <h4 className="bg-info text-white text-center p-2">
        {this.props.totalSize} products
      </h4>
      <PaginationControls keys={["ID", "Name", "Category"]} {...this.props} />
      <table className="table table-sm table-striped">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Category</td>
            <td className="text-right">Price</td>
            <td className="text-center"></td>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map((prod) => (
            <ProductsRow
              key={prod.id}
              product={prod}
              deleteProduct={this.props.deleteProduct}
            />
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <Link to="/admin/products/create" className="btn btn-primary">
          Create Product
        </Link>
      </div>
    </div>
  );
}
