import styled from "styled-components";

export const ProductDetailsStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const ProductName = styled.div`
    max-width: 40vw;
    font-size: ${props => props.theme.fontSizes.font_24}
`;

export const ProductPrice = styled.div`
    font-size: ${props => props.theme.fontSizes.font_20};
    &:before {
        content: "₹ ";
    }
`;

export const ProductDescription = styled.div`
    font-size: ${props => props.theme.fontSizes.font_12};
    max-width: 40vw;
`;

export const AddToCartWrapper = styled.div`
    max-width: 200px;
`;

export const NotLoggedIn = styled.div`
    color: white;
    max-width: 200px;
    font-size: ${props => props.theme.fontSizes.font_12};
    opacity: 0.5;
`;
