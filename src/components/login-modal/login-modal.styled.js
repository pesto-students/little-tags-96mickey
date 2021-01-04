import styled from "styled-components";

export const ModalTitle = styled.div`
  font-family: ${(props) => props.theme.headingFont};
  font-size: 30px;
  line-height: 1.2;
  text-align: center;
  margin-top: 20px;
`;

export const ModalSubTitle = styled.div`
  font-family: ${(props) => props.theme.bodyFont};
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  margin: 20px 0;
`;

export const ModalIconComponentWrapper = styled.span`
  margin-right: 20px;
`;
