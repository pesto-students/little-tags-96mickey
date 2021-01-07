import { ProductCard } from "components";
import React, { useEffect, useState } from "react";
import { getProducts } from "services";

// styles
import {
  ProductListHeadingStyled,
  ProductListStyled,
} from "./product-list.styled";

export const ProductList = (props) => {
  const categoryType = props.match.params.type || "";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await getProducts(categoryType);
      console.log(response.data);
      if (response) setProducts([...products, ...response.data]);
    };
    fetchProducts();
  }, [categoryType]);

  return (
    <ProductListStyled>
      <ProductListHeadingStyled>All {categoryType}</ProductListHeadingStyled>
      {products ? mapProducts(products) : <div>No products found</div>}
    </ProductListStyled>
  );
};

const mapProducts = (products, type) => {
  return products.map((product, idx) => (
    <ProductCard key={idx} item={product} type={type} />
  ));
};
