import React from 'react';
import { Link } from 'react-router-dom';
import { 
    ProductCardStyled, 
    ProductImageStyled, 
    ProductNameStyled,
    ProductPriceStyled
} from './product-card.styled';

export const ProductCard = (props) => {
    return (
    <Link 
        to={`/prod/${props.item.id}/description`} 
        style={{ textDecoration: 'none', color: 'inherit' }}>
        <ProductCardStyled>
            <ProductImageStyled src={props.item.image} />
            <ProductNameStyled><strong>{props.item.name}</strong></ProductNameStyled>
        <ProductPriceStyled><strong>{props.item.price}</strong></ProductPriceStyled>
        </ProductCardStyled>
    </Link>
    )
}