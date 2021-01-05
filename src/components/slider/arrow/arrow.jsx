import React from 'react';
import { ArrowStyled, ArrowImage } from './arrow.styled';

const leftArrow = require("../../../assets/images/left-arrow.png").default;
const rightArrow = require("assets/images/right-arrow.png").default;

export const Arrow = ({ direction, handleClick }) => (
  <ArrowStyled
    onClick={handleClick}
    direction={direction}
  >
    {
        direction === 'right' ? 
        <ArrowImage alt="next" src={rightArrow} /> : 
        <ArrowImage alt="previous" src={leftArrow} />
    }
  </ArrowStyled>
)