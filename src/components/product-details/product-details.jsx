import { QuantitySelector } from 'components/quantity-selector/quantity-selector';
import { SizeSelector } from 'components/size-selector/size-selector';
import React from 'react';
import { 
    ProductDetailsStyled, 
    ProductName, 
    ProductPrice,
    ProductDescription
} from './product-details.styled';

export const ProductDetails = (props) => {
    console.log(props.product);
    const {product} = props;
    return (
        <ProductDetailsStyled>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>
            <SizeSelector 
                onSizeSelect={props.onSizeSelect} 
                size={product.size} 
                selectedSize={props.selectedSize}
            />
            <QuantitySelector />
            {/* add to cart button */}
        </ProductDetailsStyled>
    )
}