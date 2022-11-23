import { useState } from "react";
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
import { Flex, IconButton, Spacer, Text, Box } from "@chakra-ui/react";
import { IconX } from "@tabler/icons";

const Sidebar = () => {
  const current = useLocation().pathname;
  const [miniSidebar, setMiniSidebar] = useState(true);

  const options = [
    { name: "dashboard", path: "/dashboard/home" },
    { name: "tracking", path: "/dashboard/tracking" },
    { name: "analytics", path: "/dashboard/analytics" },
    { name: "drivers", path: "/dashboard/drivers" },
    { name: "customers", path: "/dashboard/customers" },
    { name: "product", path: "/dashboard/product" },
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
            <Flex w="100%">
              <Box>
                <GiArtificialHive
                  size="45px"
                  color="red"
                  onClick={() => setMiniSidebar(false)}
                  style={{ cursor: "pointer" }}
                />
              </Box>
              {!miniSidebar && (
                <Flex w="250px">
                  <Text
                    ml="10px"
                    color={theme.color.text}
                    fontSize="sm"
                    maxW="150px"
                    fontWeight="bold"
                    display="flex"
                    alignItems="center"
                    lineHeight="0.95rem"
                  >
                    vision inventory management
                  </Text>
                  <Spacer />
                  <IconButton
                    variant="unstyled"
                    icon={
                      <IconX
                        color={theme.color.accent}
                        size="20px"
                        strokeWidth="2px"
                      />
                    }
                    onClick={() => setMiniSidebar(true)}
                  />
                </Flex>
              )}
            </Flex>
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
                  initial={current === item.path ? "visible" : "hidden"}
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
                  {!miniSidebar && <p>{item.name}</p>}
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
                  {!miniSidebar && <p>{item.name}</p>}
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
