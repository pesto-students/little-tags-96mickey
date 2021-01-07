import React, { useState } from 'react'
import { Arrow } from './arrow/arrow'
import { Slide } from './slide/slide'
import { SliderContent } from './slider-content'
import { SliderStyled } from './slider.styled'

export const Slider = (props) => {
  const getWidth = () => window.innerWidth;
  const singleSlideWidth = () => 300;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * singleSlideWidth()
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * singleSlideWidth(),
        activeIndex: props.slides.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * singleSlideWidth()
    })
  }

  return (
        <SliderStyled width={singleSlideWidth()}>
          <SliderContent
            translate={translate}
            transition={transition}
            width={getWidth()}
          >
            {props.slides.map((slide, i) => (
              <Slide width={singleSlideWidth()} key={slide + i} content={slide} />
            ))}
          </SliderContent>

          <Arrow direction="left" handleClick={prevSlide} />
          <Arrow direction="right" handleClick={nextSlide} />
        </SliderStyled>
    )
}
