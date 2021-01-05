import styled from "styled-components";

export const SizeSelectorOptionStyled = styled.div`
    padding: 0 5px;
    border-radius: 2px;
    ${props => props.isSelected ? "color: white; background: black": ""};
    ${props => !props.isAvailable ? "color: grey; cursor: not-allowed": "cursor: pointer"}
`;
