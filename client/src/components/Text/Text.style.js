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
  line-height: ${(props) => props.theme.text.dxl};
  text-transform: capitalize;
`;
export const Text = styled.div`
  color: ${(props) => props.theme.color.text};
`;
export const TextLight = styled.div`
  color: ${(props) => props.theme.color.textLight};
`;
export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
