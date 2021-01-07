import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import {
  CarouselSliderWrapper,
  ProductCarouselImageStyled,
  ProuctImageTextOverlayStyled,
  ProductCarouselImageWrapperStyled,
} from "./product-section.component.styled";
import { Link } from "react-router-dom";
import {
  ProductData as items,
  ProductCarouselIntervalTime,
} from "./../../constants/home.contants";

const ProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={`ProductCarouselSlides-${index}`}
      >
        <div className="row">
          {item.products.map((product, index) => {
            return (
              <ProductCarouselImageWrapperStyled
                className="col-lg-3"
                key={`MostInDemandProduct-${index}`}
              >
                <Link to={product.goTo}>
                  <ProductCarouselImageStyled
                    className="product-image"
                    src={product.imgUrl}
                    alt={product.altText}
                    width="100%"
                  />
                  <ProuctImageTextOverlayStyled className="view-now-text">
                    View Now
                  </ProuctImageTextOverlayStyled>
                </Link>
              </ProductCarouselImageWrapperStyled>
            );
          })}
        </div>
      </CarouselItem>
    );
  });

  return (
    <CarouselSliderWrapper>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={ProductCarouselIntervalTime}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
      </Carousel>
    </CarouselSliderWrapper>
  );
};

export default ProductCarousel;
