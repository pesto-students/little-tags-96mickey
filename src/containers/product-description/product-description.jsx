import { Slider, ProductDetails, Loader } from "components";
import ProductSectionComponent from "components/product-section/product-section.component";
import React, { useEffect, useState } from "react";
import { getProdById } from "services";
import { ProductDescriptionStyled, ProductDiscoverTitle } from "./product-description.styled";

export const ProductDescription = (props) => {
  const productId = props.match.params.id || "";
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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
      };
      setIsLoading(false);
    };
    fetchProducts();
  }, [productId]);

  if(isLoading) return <Loader />;
  else if (!product) return <div>404 not found</div>;
  return (
    <div>
    <ProductDescriptionStyled>
      <Slider slides={product.images} />
      <ProductDetails product={product} />
    </ProductDescriptionStyled>
    <section className="product-section">
      <ProductDiscoverTitle>Discover more categories</ProductDiscoverTitle>
      <ProductSectionComponent />
    </section>
    </div>
  );
};
