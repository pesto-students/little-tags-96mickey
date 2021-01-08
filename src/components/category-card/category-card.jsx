import React from "react";
import PropTypes from "prop-types";
import {
  CategoryCardStyled,
  CategoryImage,
  CategoryInfo,
} from "./category-card.styled";
import { StyledLink } from "components";

export const CategoryCard = (props) => {
  return (
    <StyledLink to={props.link}>
      <CategoryCardStyled>
        <CategoryImage src={props.image} />
        <CategoryInfo>{props.displayText}</CategoryInfo>
      </CategoryCardStyled>
    </StyledLink>
  );
};

CategoryCard.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  displayText: PropTypes.string,
};
