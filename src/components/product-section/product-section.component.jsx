import React from "react";

// components
import { CategoryCard } from "components/category-card/category-card";

// styles
import {
  ProductSectionComponentTitleStyled,
  ProductSectionCategoryImageStyled,
  ProductSectionCategoryWrapperStyled,
} from "./product-section.component.styled";

const renderCategories = (data) => (
  <ProductSectionCategoryWrapperStyled>
    {data.map((category, index) => {
      return (
        <ProductSectionCategoryImageStyled
          width={category.img.offsetWidth}
          height={category.img.offsetHeight}
          key={index}
        >
          <CategoryCard
            key={`ProductSectionCategory-${index}`}
            displayText={category.label}
            image={category.img}
            link={category.goTo}
          />
        </ProductSectionCategoryImageStyled>
      );
    })}
  </ProductSectionCategoryWrapperStyled>
);

function ProductSectionComponent({
  productData: { title, categories },
  handleCategoryClick,
}) {
  return (
    <ProductSectionComponentTitleStyled>
      {title}
      {renderCategories(categories, handleCategoryClick)}
    </ProductSectionComponentTitleStyled>
  );
}

export default ProductSectionComponent;
