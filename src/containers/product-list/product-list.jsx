import { ProductCard, Loader } from "components";
import React, { useEffect, useState } from "react";
import { getProducts } from "services";
import {
  ProductListHeadingStyled,
  ProductListStyled,
} from "./product-list.styled";

export const ProductList = (props) => {
  const categoryType = props.match.params.type || "";
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      let response = await getProducts(categoryType);
      if (response) setProducts([...products, ...response.data]);
      setIsLoading(false);
    };
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryType]);

  if(isLoading) return <Loader />;
  return (
    <ProductListStyled>
      <ProductListHeadingStyled>
        All {categoryType.charAt(0).toUpperCase() + categoryType.slice(1)}
      </ProductListHeadingStyled>
      {products ? mapProducts(products) : <div>No products found</div>}
    </ProductListStyled>
  );
};

const mapProducts = (products) => {
  return products.map((product, idx) => (
    <ProductCard key={idx} item={product} />
  ));
};
