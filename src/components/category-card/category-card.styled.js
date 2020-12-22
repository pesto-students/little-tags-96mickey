import styled from "styled-components";

export const CategoryCardStyled = styled.div`
  font-size: ${(props) => props.theme.fontSizes.font_30};
  background: ${(props) => props.image};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const CategoryImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
`

export const CategoryInfo = styled.div`
  position: absolute;
  width: 100%;
  bottom:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 2rem;
  font-size: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
`
