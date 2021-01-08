import React from "react";
import PropTypes from "prop-types";

// styles
import { ButtonStyled } from "./button.styled";

class Button extends React.Component {
  handleButtonClick = (evt) => {
    evt && evt.stopPropagation();
    this.props.onClick && this.props.onClick();
  };

  render() {
    const { children, type } = this.props;
    return (
      <ButtonStyled onClick={this.handleButtonClick} type={type}>
        {children}
      </ButtonStyled>
    );
  }
}

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};
