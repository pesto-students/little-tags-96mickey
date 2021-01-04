import { ProductCard } from "components";
import React, { useEffect, useState } from "react";
import { getProducts } from "services";

// styles
import { ProductListStyled } from "./product-list.styled";

export const ProductList = (props) => {
  const fetchProducts = async () => {
    const type = props.match.params.type || "";
    let response = await getProducts(type);
    if (response) setProducts([...products, ...response.items]);
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <ProductListStyled>
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
