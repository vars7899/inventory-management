import {
  Box,
  Divider,
  VStack,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { theme } from "../../styles/globalTheme.style";

const DashboardTabHeader = ({ addElement, backTo }) => {
  const navigate = useNavigate();
  const current = useLocation();
  const [path, setPath] = useState([]);

  useEffect(() => {
    // break the pathname with /
    const pathname = current.pathname.split("/");
    // remove the first empty path
    pathname.shift();
    setPath(pathname);
  }, []);

  return (
    <Box>
      <Flex alignItems="center" marginBottom="20px">
        {backTo && (
          <IconButton
            icon={<IconChevronLeft />}
            onClick={() => navigate(backTo)}
            marginRight="20px"
            bg={theme.color.accent}
            color={theme.color.text}
          />
        )}
        <VStack display="flex" alignItems="center">
          <Breadcrumb
            separator={<IconChevronRight strokeWidth="1px" size="15px" />}
            spacing="10px"
            w="100%"
          >
            {path.map((el, index) => (
              <BreadcrumbItem key={`bread-comp-${index}`}>
                {/* Dimag++ */}
                <BreadcrumbLink
                  href={`/${path.slice(0, index + 1).join("/")}`}
                  textTransform="uppercase"
                  fontSize="xs"
                  fontWeight="bold"
                >
                  {el}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
          <Text
            w="100%"
            fontSize="2xl"
            lineHeight="1.25rem"
            fontWeight="bold"
            textTransform="capitalize"
          >
            {path[path.length - 1]}
          </Text>
        </VStack>
        <Spacer />
        {addElement && addElement}
      </Flex>
      <Divider />
    </Box>
  );
};

export default DashboardTabHeader;
