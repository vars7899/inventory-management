import {
  IconLayoutDashboard,
  IconCurrentLocation,
  IconChartDots3,
  IconTruckDelivery,
  IconUsers,
  IconFriends,
  IconFileInvoice,
  IconSettings,
  IconLifebuoy,
} from "@tabler/icons";
import { theme } from "../styles/globalTheme.style";

const SelectIcon = ({ givenType, isActive }) => {
  switch (givenType) {
    case "dashboard":
      return (
        <IconLayoutDashboard
          size={30}
          stroke={1.5}
          color={isActive ? theme.color.accent : theme.color.textLight}
        />
      );
    case "tracking":
      return (
        <IconCurrentLocation
          size={30}
          stroke={1.5}
          color={isActive ? theme.color.accent : theme.color.textLight}
        />
      );
    case "analytics":
      return (
        <IconChartDots3
          size={30}
          stroke={1.5}
          color={isActive ? theme.color.accent : theme.color.textLight}
        />
      );
    case "drivers":
      return (
        <IconTruckDelivery
          size={30}
          stroke={1.5}
          color={isActive ? theme.color.accent : theme.color.textLight}
        />
      );
    case "customers":
      return (
        <IconUsers
          size={30}
          stroke={1.5}
          color={isActive ? theme.color.accent : theme.color.textLight}
        />
      );
    case "employees":
      return (
        <IconFriends
          size={30}
          stroke={1.5}
          color={isActive ? theme.color.accent : theme.color.textLight}
        />
      );
    case "documents":
      return (
        <IconFileInvoice
          size={30}
          stroke={1.5}
          color={isActive ? theme.color.accent : theme.color.textLight}
        />
      );
    case "settings":
      return (
        <IconSettings
          size={30}
          stroke={1.5}
          color={isActive ? theme.color.accent : theme.color.textLight}
        />
      );
    case "support":
      return (
        <IconLifebuoy
          size={30}
          stroke={1.5}
          color={isActive ? theme.color.accent : theme.color.textLight}
        />
      );
    default:
      return (
        <IconLifebuoy
          size={30}
          stroke={1.5}
          color={isActive ? theme.color.accent : theme.color.textLight}
        />
      );
  }
};

export default SelectIcon;
