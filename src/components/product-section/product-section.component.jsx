import React from "react";
import PropTypes from "prop-types";

// components
import { CategoryCard } from "components/category-card/category-card";
import ProductCarouselComponent from "./product-carousel";

// constants
import {
  HomeCategoriesImageData,
  MostInDemandSectionTitle,
} from "./../../constants/home.contants";
// styles
import {
  ProductSectionComponentTitleStyled,
  HomeBannerProductImages,
  ProductSectionRecordStyledWrapper,
} from "./product-section.component.styled";

function ProductSectionComponent() {
  return (
    <>
      <HomeBannerProductImages>
        <div className="container-fluid">
          <div class="row">
            {HomeCategoriesImageData.map((product, index) => (
              <ProductSectionRecordStyledWrapper
                className="col-lg-4"
                key={`ProductSectionComponent-${index}`}
              >
                <CategoryCard
                  link={product.goTo}
                  image={product.imgUrl}
                  displayText={product.text}
                />
              </ProductSectionRecordStyledWrapper>
            ))}
          </div>
        </div>
      </HomeBannerProductImages>

      <ProductSectionComponentTitleStyled>
        {MostInDemandSectionTitle}
      </ProductSectionComponentTitleStyled>

      <ProductCarouselComponent />
    </>
  );
}

export default ProductSectionComponent;

ProductSectionComponent.propTypes = {};
