import React, { Component } from "react";
import { getProducts } from "services";
import {
  ProductListHeadingStyled,
  ProductListStyled,
} from "./product-list.styled";

// components
import { ProductCard } from "components";

const mapProducts = (products) => {
  return products.map((product, idx) => (
    <ProductCard key={idx} item={product} />
  ));
};

export class ProductList extends Component {
  state = {
    products: [],
  };

  constructor(props) {
    super(props);
    this.categoryType = props.match.params.type || "";
  }

  fetchProducts = async () => {
    let response = await getProducts(this.categoryType);
    if (response) {
      this.setState({
        products: [...this.state.products, ...response.data],
      });
    }
  };

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    return (
      <ProductListStyled>
        <ProductListHeadingStyled>
          All {this.categoryType}
        </ProductListHeadingStyled>
        {this.state.products ? (
          mapProducts(this.state.products)
        ) : (
          <div>No products found</div>
        )}
      </ProductListStyled>
    );
  }
}
