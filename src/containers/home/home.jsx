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

const productData = {
  title: "Most in Demand",
  categories: [
    {
      label: "T - Shirts",
      img: require("./../../assets/images/tshirts.jpg").default,
    },
    {
      label: "Jeans",
      img: require("./../../assets/images/jeans.jpg").default,
    },
    {
      label: "Backpacks",
      img: require("./../../assets/images/backpack.jpg").default,
    },
    {
      label: "Charm Necklace",
      img: require("./../../assets/images/watches.jpg").default,
    },
  ],
};

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
        <ProductSectionComponent
          productData={productData}
          handleCategoryClick={handleCategoryClick}
        />
      </section>
    </div>
  );
};
