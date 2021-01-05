import { ProductCard } from "components";
import React, { useEffect, useState } from "react";
import { getProducts } from "services";

// styles
import { ProductListHeadingStyled, ProductListStyled } from "./product-list.styled";

export const ProductList = (props) => {
  const categoryType = props.match.params.type || "";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const type = props.match.params.type || "";
      let response = await getProducts(type);
      if (response) setProducts([...products, ...response]);
    };
    fetchProducts();
  }, [categoryType, products, props.match.params.type]);
  
  return (
    <ProductListStyled>
      <ProductListHeadingStyled>All {categoryType}</ProductListHeadingStyled>
      {
        products ? 
        mapProducts(products) :
        (<div>
          No products found
        </div>)
      }      
    </ProductListStyled>
  );
};

const mapProducts = (products) => {
  return products.map((product, idx) => (<ProductCard key={idx} item={product} />))
}
