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
} from "@chakra-ui/react";
import { IconChevronRight } from "@tabler/icons";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { theme } from "../../styles/globalTheme.style";

const DashboardTabHeader = ({
  given_heading,
  given_sub_heading,
  addElement,
}) => {
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
