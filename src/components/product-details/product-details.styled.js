import styled from "styled-components";

export const ProductDetailsStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const ProductName = styled.div`
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
