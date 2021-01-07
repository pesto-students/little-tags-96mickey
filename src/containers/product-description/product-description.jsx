import { Slider, ProductDetails } from "components";
import React, { useEffect, useState } from "react";
import { getProdById } from "services";
import { ProductDescriptionStyled } from "./product-description.styled";

export const ProductDescription = (props) => {
  const productId = props.match.params.id || "";
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await getProdById(productId);
      if (response.status === 200) {
        response.data.images = [
          response.data.image,
          response.data.image,
          response.data.image,
          response.data.image,
        ];
        setProduct(response.data);
      }
    };
    fetchProducts();
  }, [productId]);

  if (!product) return <div>404 not found</div>;
  return (
    <ProductDescriptionStyled>
      <Slider slides={product.images} />
      <ProductDetails
        product={product}
      />
    </ProductDescriptionStyled>
  );
};
