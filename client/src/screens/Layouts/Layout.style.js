import styled from "styled-components";

export const LayoutStyle = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  max-width: 100vw;
  max-height: 100vh;
`;
export const LeftContainerStyle = styled.div`
  position: sticky;
  top: 0;
`;
export const RightContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
