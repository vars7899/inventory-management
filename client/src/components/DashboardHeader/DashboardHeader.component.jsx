import React from "react";
import IconButton from "../Button/IconButton";
import {
  DashboardHeaderContainer,
  DashboardHeaderLeft,
  DashboardHeaderRight,
  UserAvatar,
  UserAvatarOption,
  UserNameOption,
} from "./DashboardHeader.style";
import {
  IconAlertTriangle,
  IconBell,
  IconChevronDown,
  IconMail,
} from "@tabler/icons";
import { theme } from "../../styles/globalTheme.style";
import { getDayName, toMonthName } from "../../functions/monthName";

const DashboardHeader = () => {
  const current_date = new Date();
  const date_string = `${current_date.getDate()}  ${toMonthName(
    current_date.getMonth()
  )} ${current_date.getFullYear()}`;
  const day_name = getDayName(current_date.getDate());
  return (
    <DashboardHeaderContainer>
      <DashboardHeaderLeft>
        <p>{day_name}</p>
        <p>{date_string}</p>
      </DashboardHeaderLeft>
      <DashboardHeaderRight>
        <IconButton
          children={
            <IconBell size={30} stroke={1.5} color={theme.color.grey} />
          }
        />
        <IconButton
          children={
            <IconMail size={30} stroke={1.5} color={theme.color.grey} />
          }
        />
        <UserAvatarOption>
          <UserAvatar />
          <UserNameOption>
            <p>John doe</p>
            <IconChevronDown size={30} stroke={1.5} color={theme.color.grey} />
          </UserNameOption>
        </UserAvatarOption>
        <IconButton
          children={
            <IconAlertTriangle
              size={30}
              stroke={1.5}
              color={theme.color.grey}
            />
          }
        />
      </DashboardHeaderRight>
    </DashboardHeaderContainer>
  );
};

export default DashboardHeader;
