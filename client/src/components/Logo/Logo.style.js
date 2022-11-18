import styled from "styled-components";

export const BrandLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.color.grey2};
  & > p {
    margin-left: 10px;
    width: 150px;
    color: ${({ theme }) => theme.color.text};
    font-size: ${(props) => props.theme.text.xs};
    font-weight: bolder;
    line-height: 0.95rem;
  }
`;

export const BrandLogoLarge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  padding: 20px;
  width: 100%;
  cursor: pointer;
  & > p {
    margin-left: 10px;
    width: 250px;
    color: ${({ theme }) => theme.color.text};
    font-size: ${(props) => props.theme.text.md};
    font-weight: bolder;
    line-height: 1.5rem;
    text-align: center;
    user-select: none;
  }
`;
