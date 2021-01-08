import styled from "styled-components";

export const AddressListWrapper = styled.div`
    font-size: ${props => props.theme.fontSizes.font_20};
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AddAddressWrapper = styled.div`
    margin: 10px;
    font-size: ${props => props.theme.fontSizes.font_20}
`;

export const ProceedButton = styled.div`
    margin: 20px 20px;
    width: 200px;
`;