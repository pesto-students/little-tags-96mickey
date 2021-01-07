import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import {
  CategoryCardStyled,
  CategoryImage,
  CategoryInfo,
} from "./category-card.styled";

export const CategoryCard = (props) => {
  return (
    <Link to={props.link}>
      <CategoryCardStyled>
        <CategoryImage src={props.image} />
        <CategoryInfo>{props.displayText}</CategoryInfo>
      </CategoryCardStyled>
    </Link>
  );
};

CategoryCard.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  displayText: PropTypes.string,
};
