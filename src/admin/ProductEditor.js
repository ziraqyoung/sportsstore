import React, { Component } from "react";
import { Query } from "react-apollo";

import { ProductCreator } from "./ProductCreator";
import { product } from "./clientQueries";

export class ProductEditor extends Component {
  render = () => (
    <Query query={product} variables={{ id: this.props.match.params.id }}>
      {({ loading, data }) => {
        if (!loading) {
          return (
            <ProductCreator
              product={data.product}
              mode="edit"
              {...this.props}
            />
          );
        }
        return null;
      }}
    </Query>
  );
}
