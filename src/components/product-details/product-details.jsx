import Button from 'components/button/button.component';
import { SizeSelector, QuantitySelector } from 'components';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    ProductDetailsStyled, 
    ProductName, 
    ProductPrice,
    ProductDescription
} from './product-details.styled';
import { ADD_TO_CART } from 'reducers/types.constants';

export const ProductDetails = (props) => {
    const [selectedSize, setSelectedSize] = useState();
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [isSizeEmpty, setIsSetSizeEmpty] = useState(false);

    const {product} = props;
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();

    const onSizeSelect = (size) => {
        setSelectedSize(size);
        setIsSetSizeEmpty(false);
    }

    const addToCart = () => {
        if(!selectedSize) {
            setIsSetSizeEmpty(true);
            return;
        }
        dispatch({
          type: ADD_TO_CART,
          payload: {
            ...product,
            quantity: selectedQuantity,
            size: selectedSize
          },
        });
    }

    return (
        <ProductDetailsStyled>
            <ProductName>{product.title}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>
                <SizeSelector 
                    onSizeSelect={(size) => onSizeSelect(size)} 
                    size={product.size} 
                    selectedSize={selectedSize}
                    isSizeEmpty={isSizeEmpty}
                />
            <QuantitySelector minValue={1} onChange={setSelectedQuantity} />
            {isLoggedIn && <Button onClick={addToCart}>Add to Cart</Button>}
        </ProductDetailsStyled>
    )
}