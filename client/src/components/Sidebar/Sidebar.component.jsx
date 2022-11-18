import React, { useState } from "react";
import {
  SidebarStyleContainer,
  BrandLogo,
  SidebarLower,
  SidebarOptionItem,
  SidebarOptionList,
  SidebarStyle,
  SidebarUpper,
} from "./Sidebar.style";
import { GiArtificialHive } from "react-icons/gi";
import SelectIcon from "../../functions/selectIcon";
import { theme } from "../../styles/globalTheme.style";
import { Link, useMatch, useLocation } from "react-router-dom";

const Sidebar = () => {
  const current = useLocation().pathname;

  const options = [
    { name: "dashboard", path: "/dashboard/home" },
    { name: "tracking", path: "/dashboard/tracking" },
    { name: "analytics", path: "/dashboard/analytics" },
    { name: "drivers", path: "/dashboard/drivers" },
    { name: "customers", path: "/dashboard/customers" },
    { name: "employees", path: "/dashboard/employees" },
    { name: "supplier", path: "/dashboard/supplier" },
    { name: "documents", path: "/dashboard/documents" },
  ];

  const otherOptions = [
    { name: "settings", path: "/dashboard/settings" },
    { name: "support", path: "/dashboard/support" },
  ];

  return (
    <SidebarStyleContainer>
      <SidebarStyle>
        <SidebarUpper>
          <BrandLogo>
            <GiArtificialHive size={45} color="red" />
            <p>vision inventory management</p>
          </BrandLogo>
          <SidebarOptionList>
            {options.map((item, index) => (
              <Link key={`sidebar-option-${index}`} to={item.path}>
                <SidebarOptionItem
                  whileHover={{
                    scale: current === item.path ? 1 : 1.02,
                    background:
                      current === item.path
                        ? theme.color.accent2
                        : theme.color.grey2,
                  }}
                  animate={current === item.path ? "visible" : "hidden"}
                  whileTap={{ scale: 0.99, background: theme.color.accent2 }}
                  onClick={() => setCurrentTab(item.name)}
                >
                  {
                    <SelectIcon
                      givenType={item.name}
                      isActive={current === item.path}
                    />
                  }
                  <p>{item.name}</p>
                </SidebarOptionItem>
              </Link>
            ))}
          </SidebarOptionList>
        </SidebarUpper>
        <SidebarLower>
          <SidebarOptionList>
            {otherOptions.map((item, index) => (
              <Link key={`sidebar-option-${index}`} to={item.path}>
                <SidebarOptionItem
                  whileHover={{
                    scale: current === item.path ? 1 : 1.02,
                    background:
                      current === item.path
                        ? theme.color.accent2
                        : theme.color.grey2,
                  }}
                  animate={current === item.path ? "visible" : "hidden"}
                  whileTap={{
                    scale: 0.99,
                    background: theme.color.accent2,
                  }}
                  onClick={() => setCurrentTab(item)}
                >
                  {
                    <SelectIcon
                      givenType={item.name}
                      isActive={current === item.path}
                    />
                  }
                  <p>{item.name}</p>
                </SidebarOptionItem>
              </Link>
            ))}
          </SidebarOptionList>
        </SidebarLower>
      </SidebarStyle>
    </SidebarStyleContainer>
  );
};

export default Sidebar;
