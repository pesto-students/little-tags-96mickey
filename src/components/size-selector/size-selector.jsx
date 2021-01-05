import React from 'react';
import { SizeSelectorOption } from './size-selector-option/size-selector-option';
import { SizeOptions, SizeSelectorStyled } from './size-selector.styled';
const availableOptions = ["XS", "S", "M", "L", "XL"];

export const SizeSelector = (props) => {
    console.log("orihhcj", props)
    return(
        <SizeSelectorStyled>
            <strong>Size</strong>
            <SizeOptions>
                {
                availableOptions.map((item, index) => (
                    <SizeSelectorOption 
                        key={index}
                        selectedSize={props.selectedSize} 
                        name={item} 
                        options={props.size}
                        onClick={() => props.onSizeSelect(item)}
                    />
                ))}
            </SizeOptions>
        </SizeSelectorStyled>
    )
}
