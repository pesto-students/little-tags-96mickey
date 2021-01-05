import React, { useState, forwardRef, useEffect } from 'react';
import { Wrapper } from './quantity-selector.styled';

export const QuantitySelector = forwardRef(
  ({ id, name, value, minValue, maxValue, onChange }, ref) => {
    const [val, setVal] = useState(1);
    const minVal = minValue || -Infinity;
    const maxVal = maxValue || Infinity;

    useEffect(() => {
      if (value) {
        setVal(value);
      }
    }, [value]);

    const handleChange = e => {
      const newVal = parseInt(e.target.value, 10);
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(newVal)) {
        if (newVal <= maxVal && newVal >= minVal) {
          setVal(newVal);
          onChange && onChange(newVal);
        }
      }
    };

    const increaseValue = e => {
      e.preventDefault();
      e.stopPropagation();
      const newVal = val + 1 >= maxVal ? maxVal : val + 1;
      setVal(newVal);
      onChange && onChange(newVal);
    };

   const decreaseValue = e => {
      e.preventDefault();
      e.stopPropagation();
      const newVal = val - 1 >= minVal ? val - 1 : minVal;
      setVal(newVal);
      onChange && onChange(newVal);
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
  },
);
