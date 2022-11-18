import styled from "styled-components";

export const TextSmall = styled.div`
  font-size: ${(props) => props.theme.text.md};
  font-weight: 1000;
  text-transform: capitalize;
`;
export const TextLarge = styled.div`
  font-size: ${(props) => props.theme.text.xl};
  font-weight: 1000;
  text-transform: capitalize;
`;
export const TextExtraLarge = styled.div`
  font-size: ${(props) => props.theme.text.dxl};
  font-weight: 1000;
  text-transform: capitalize;
`;
