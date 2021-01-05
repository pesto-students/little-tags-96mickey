import styled from "styled-components";

export const SizeSelectorStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    font-size: ${props => props.theme.fontSizes.font_16};
`;

export const SizeOptions = styled.div`
    display: flex;
`;
