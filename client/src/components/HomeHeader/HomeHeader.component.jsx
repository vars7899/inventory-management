import React from "react";
import ButtonComponent from "../Button/Button.component";
import { TextExtraLarge, TextLarge, TextSmall } from "../Text/Text.style";
import {
  HeaderLeft,
  HeaderRight,
  HomeHeaderContainerStyle,
  HomeHeaderStyle,
} from "./HomeHeader.style";

const HomeHeader = () => {
  return (
    <HomeHeaderContainerStyle>
      <HomeHeaderStyle>
        <HeaderLeft>
          <TextLarge>Vision helps brand</TextLarge>
          <TextExtraLarge>Increase Revenue</TextExtraLarge>
          <TextSmall>
            Uncover insights from your data that will increase sales, optimize
            spending, and cut costs.
          </TextSmall>
          <ButtonComponent text="get started" type="outline" />
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </HomeHeaderStyle>
      ;
    </HomeHeaderContainerStyle>
  );
};

export default HomeHeader;
