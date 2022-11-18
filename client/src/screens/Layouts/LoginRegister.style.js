import styled from "styled-components";

export const LoginRegisterStyleContainer = styled.div`
  max-height: 100%;
  min-height: 100vh;
  max-width: 100vw;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 550px);
`;
export const LoginRegisterLeft = styled.div`
  max-height: 100vh;
  position: relative;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right top;
  }
`;
export const LoginRegisterRight = styled.div`
  background-color: ${(props) => props.theme.color.dark};
  padding: 40px;
`;
export const LoginFormArea = styled.div`
  margin-top: 40px;
  padding: 0px 20px;
  display: grid;
  grid-gap: 30px;
`;
