import styled from "styled-components";

export const ArrowStyled = styled.div`
background: white;
display: flex;
position: absolute;
top: 50%;
${props => props.direction === 'right' ? `right: 10px` : `left: 10px`};
justify-content: center;
border-radius: 50%;
cursor: pointer;
align-items: center;
transition: transform ease-in 0.1s;
&:hover {
  transform: scale(1.1);
}
img {
  transform: translateX(${props => props.direction === 'left' ? '-2' : '2'}px);
  &:focus {
    outline: 0;
  }
}
`;

export const ArrowImage = styled.img`
  height: 20px;
  width: 20px;
`;
