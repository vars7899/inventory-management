import styled from "styled-components";

export const ButtonStyle = styled.button`
  background: ${(props) =>
    props.type === "fill" ? props.theme.color.text : "none"};
  border: 2px solid
    ${(props) =>
      props.type === "outline" ? props.theme.color.accent : "transparent"};
  border-radius: 11px;
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.text.sm};
  padding: 12px 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: bolder;
`;

export const IconButtonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
  height: 50px;
  width: 50px;
`;
