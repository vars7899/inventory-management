import styled from "styled-components";

export const HomeHeaderContainerStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeHeaderStyle = styled.div`
  max-width: ${(props) => props.theme.container.maxWidth};
  height: 90vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const HeaderLeft = styled.div`
  grid-column: 1 / 7;
  align-self: center;
  & > :nth-child(2) {
    padding: 10px 0px;
  }
  & > :nth-child(4) {
    margin-top: 70px;
  }
`;
export const HeaderRight = styled.div``;
