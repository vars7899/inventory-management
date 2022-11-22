import { Flex, Box, Text, Spacer, Divider } from "@chakra-ui/react";
import { IconDots } from "@tabler/icons";
import React from "react";
import { Link } from "react-router-dom";
import { CountUp } from "use-count-up";
import { theme } from "../../styles/globalTheme.style";
import { FlexCenter, TextExtraLarge, TextLarge } from "../Text/Text.style";

const StaticsCard = ({
  givenCardHeader,
  givenPathTo,
  givenIcon,
  givenData,
}) => {
  return (
    <Box bg={theme.color.dark2} padding="25px" borderRadius="10px">
      <Flex>
        <Text>{givenCardHeader}</Text>
        <Spacer />
        <Link to={givenPathTo}>
          <IconDots />
        </Link>
      </Flex>
      <Divider m="10px 0px" />
      <Flex flexDirection="row" marginTop="20px">
        <Box>
          <FlexCenter>{givenIcon}</FlexCenter>
        </Box>
        <Spacer />
        <Text fontSize="3rem" lineHeight="3rem">
          <CountUp isCounting end={givenData} duration={4} />
        </Text>
      </Flex>
      <Flex>
        <Spacer />
        <Text color={theme.color.grey} fontSize="0.85rem">
          overall lifetime
        </Text>
      </Flex>
    </Box>
  );
};

export default StaticsCard;
