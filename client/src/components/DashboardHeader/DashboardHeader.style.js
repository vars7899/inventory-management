import styled from "styled-components";

export const DashboardHeaderContainer = styled.div`
  background-color: ${(props) => props.theme.color.dark};
  height: 86px;
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DashboardHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  & > :nth-child(1) {
    font-size: ${(props) => props.theme.text.md};
    font-weight: bolder;
    color: ${(props) => props.theme.color.text};
    text-transform: uppercase;
  }
  & > :nth-child(2) {
    font-size: ${(props) => props.theme.text.xs};
    font-weight: 600;
    color: ${(props) => props.theme.color.grey};
    text-transform: uppercase;
  }
`;
export const DashboardHeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > * {
    margin: 0px 10px;
  }
`;
export const UserAvatarOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 20px;
  margin-left: 10px;
  border-left: 1px solid ${(props) => props.theme.color.grey2};
`;
export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
  width: 50px;
  background-color: ${(props) => props.theme.color.grey2};
  border-radius: 50%;
  margin: 0px 5px;
`;
export const UserNameOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 15px;
  & > p {
    font-size: ${(props) => props.theme.text.md};
    font-weight: bolder;
    color: ${(props) => props.theme.color.text};
    text-transform: capitalize;
  }
`;
