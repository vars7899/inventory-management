import styled from "styled-components";

export const NavBarContainer = styled.div`
  background: ${({ theme }) => theme.color.secondary};
  height: 85px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavBar = styled.div`
  max-width: ${(props) => props.theme.container.maxWidth};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;
export const BrandLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  & > p {
    margin-left: 10px;
    width: 150px;
    color: ${({ theme }) => theme.color.text};
    font-size: ${(props) => props.theme.text.xs};
  }
`;
export const NavBarList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
export const NavItem = styled.div`
  color: ${({ theme }) => theme.color.text};
  font-size: ${(props) => props.theme.text.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  height: 100%;
`;
export const ActionList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
