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

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState("dashboard");

  const options = [
    "dashboard",
    "tracking",
    "analytics",
    "drivers",
    "customers",
    "employees",
    "documents",
  ];
  const otherOptions = ["settings", "support"];
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
              <SidebarOptionItem
                key={`sidebar-option-${index}`}
                whileHover={{
                  scale: currentTab === item ? 1 : 1.02,
                  background:
                    currentTab === item
                      ? theme.color.accent2
                      : theme.color.grey2,
                }}
                animate={currentTab === item ? "visible" : "hidden"}
                whileTap={{ scale: 0.99, background: theme.color.accent2 }}
                onClick={() => setCurrentTab(item)}
              >
                {<SelectIcon givenType={item} isActive={currentTab === item} />}
                <p>{item}</p>
              </SidebarOptionItem>
            ))}
          </SidebarOptionList>
        </SidebarUpper>
        <SidebarLower>
          <SidebarOptionList>
            {otherOptions.map((item, index) => (
              <SidebarOptionItem
                key={`sidebar-option-other-${index}`}
                whileHover={{
                  scale: currentTab === item ? 1 : 1.02,
                  background:
                    currentTab === item
                      ? theme.color.accent2
                      : theme.color.grey2,
                }}
                animate={currentTab === item ? "visible" : "hidden"}
                whileTap={{
                  scale: 0.99,
                  background: theme.color.accent2,
                }}
                onClick={() => setCurrentTab(item)}
              >
                {<SelectIcon givenType={item} isActive={currentTab === item} />}
                <p>{item}</p>
              </SidebarOptionItem>
            ))}
          </SidebarOptionList>
        </SidebarLower>
      </SidebarStyle>
    </SidebarStyleContainer>
  );
};

export default Sidebar;
