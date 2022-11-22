import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../styles/globalTheme.style";

const variants = {
  visible: {
    color: theme.color.accent,
    background: theme.color.accent2,
  },
  hidden: {
    color: theme.color.grey,
    background: "none",
  },
};

export const SidebarStyleContainer = styled.div`
  background-color: ${(props) => props.theme.color.dark};
  /* width: 100%; */
  min-height: 100vh;
  padding: 0px 10px;
  overflow: hidden;
`;
export const SidebarStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
export const SidebarUpper = styled.div`
  width: 100%;
`;
export const SidebarLower = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.color.grey2};
`;
export const SidebarOptionList = styled.div`
  margin-top: 20px;
`;
export const SidebarOptionItem = styled(motion.div).attrs(() => ({
  variants,
}))`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 25px;
  color: ${(props) => props.theme.color.textLight};
  font-weight: bolder;
  border-radius: 15px;
  cursor: pointer;
  user-select: none;
  & > p {
    margin-left: 20px;
    text-transform: capitalize;
  }
`;

export const BrandLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  padding: 20px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.color.grey2};
`;
