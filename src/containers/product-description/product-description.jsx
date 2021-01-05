import {Slider, ProductDetails} from 'components';
import React, { useEffect, useState } from 'react';
import { getProdById } from 'services';
import { ProductDescriptionStyled } from './product-description.styled';

export const ProductDescription = (props) => {
    const productId = props.match.params.id || "";

    const [product, setProduct] = useState();
    const [selectedSize, setSelectedSize] = useState();

    useEffect(() => {
        const fetchProducts = async () => {
            let response = await getProdById(productId);
            if (response) setProduct(response);
        };
        fetchProducts();
    }, [productId]);

    if(!product) return <div>404 not found</div> 
    return (<ProductDescriptionStyled>
        <Slider slides={product.images} />
        <ProductDetails 
            onSizeSelect={setSelectedSize}
            selectedSize={selectedSize}
            product={product}
        />
    </ProductDescriptionStyled>);
}