import React, { useState, forwardRef, useEffect } from "react";
import { Wrapper } from "./quantity-selector.styled";
import { ADD_TO_CART, REMOVE_ITEM } from "./../../reducers/types.constants";

export const QuantitySelector = forwardRef(
  ({ id, name, value, minValue, maxValue, onChange }, ref) => {
    const [val, setVal] = useState(1);
    const minVal = minValue || 1;
    const maxVal = maxValue || Infinity;

    useEffect(() => {
      if (value) {
        setVal(value);
      }
    }, [value]);

    const handleChange = (e) => {
      const newVal = parseInt(e.target.value, 10);
      if (!isNaN(newVal)) {
        if (newVal <= maxVal && newVal >= minVal) {
          setVal(newVal);
          onChange && onChange(newVal);
        }
      }
    };

    const increaseValue = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const newVal = val + 1 >= maxVal ? maxVal : val + 1;
      if (checkForNegativeValues(newVal)) {
        setVal(newVal);
        onChange && onChange(newVal, ADD_TO_CART);
      }
    };

    const decreaseValue = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const newVal = val - 1;
      if (checkForNegativeValues(newVal)) {
        setVal(newVal);
        onChange && onChange(newVal, newVal === 0 ? REMOVE_ITEM : ADD_TO_CART);
      }
    };

    const checkForNegativeValues = (value) => {
      return value < 0 ? false : true;
    };

    return (
      <Wrapper>
        <button type="button" onClick={decreaseValue}>
          -
        </button>
        <input
          type="text"
          name={name}
          id={id}
          ref={ref}
          value={val}
          onChange={handleChange}
        />
        <button type="button" onClick={increaseValue}>
          +
        </button>
      </Wrapper>
    );
  }
);
