import React from "react";
import ProductSectionComponent from "../../components/product-section/product-section.component";
// styles
import {
  HomeBannerImageStyled,
  HomeBannerHeroText,
  HomeBannerTitleTextStyled,
  HomeBannerSubTitleLineStyled,
  HomeBannerSubTitleWrapperStyled,
  HomeBannerSubTitleStyled,
} from "./home.styled";

export const Home = () => {
  const handleCategoryClick = (evt) => {
    console.log(evt);
  };

  return (
    <div>
      <HomeBannerImageStyled
        imgUrl={require("./../../assets/images/banner.jpg").default}
      >
        <HomeBannerHeroText>
          <HomeBannerTitleTextStyled>
            Online Flee Market for Clothes
          </HomeBannerTitleTextStyled>
          <HomeBannerSubTitleWrapperStyled>
            <HomeBannerSubTitleLineStyled />
            <HomeBannerSubTitleStyled>
              Its time to recycle
            </HomeBannerSubTitleStyled>
            <HomeBannerSubTitleLineStyled />
          </HomeBannerSubTitleWrapperStyled>
        </HomeBannerHeroText>
      </HomeBannerImageStyled>
      <section className="product-section">
        <ProductSectionComponent handleCategoryClick={handleCategoryClick} />
      </section>
    </div>
  );
};
