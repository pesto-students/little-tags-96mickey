import React, { useEffect, useState } from 'react';
import {SizeSelectorOptionStyled} from './size-selector-option.styled';

export const SizeSelectorOption = (props) => {
    const [isAvailable, setIsAvailable] = useState(true);
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if(props.options && !props.options.includes(props.name)) {
            setIsAvailable(false);
        }
        if(props.selectedSize && props.selectedSize === props.name) {
            setIsSelected(true);
        }
      }, [setIsAvailable, props]);
    
    return (<SizeSelectorOptionStyled 
        isSelected={isSelected} 
        isAvailable={isAvailable}
        >
        {props.name}
    </SizeSelectorOptionStyled>);
}