import React from "react";
import {
  Text,
  Flex,
  Spacer,
  Box,
  VStack,
  Divider,
  Button,
} from "@chakra-ui/react";
import { IconEye, IconEyeOff } from "@tabler/icons";
import { theme } from "../../styles/globalTheme.style.js";

const CustomTableColumnSetting = ({
  allHeading,
  selectedHeading,
  setTableCategory,
}) => {
  return (
    <Box>
      <VStack p="20px" spacing="10px">
        <Text fontSize={theme.text.md} fontWeight="bold" w="100%">
          View Options
        </Text>
        {selectedHeading.length !== 0 && (
          <>
            <Flex w="100%">
              <Text fontSize={theme.text.xs} color={theme.color.grey}>
                Show Columns
              </Text>
              <Spacer />
              <Text
                fontSize={theme.text.xs}
                color={theme.color.accent}
                onClick={() => setTableCategory([])}
                cursor="pointer"
              >
                Hide All
              </Text>
            </Flex>
            <Divider />
            {selectedHeading.map((item, index) => (
              <Button
                size="sm"
                variant="ghost"
                key={`option-index-${index}`}
                w="100%"
                onClick={() =>
                  setTableCategory((inc) => inc.filter((op) => op !== item))
                }
              >
                <Text textTransform="capitalize" fontSize={theme.text.xs}>
                  {item}
                </Text>
                <Spacer />
                <IconEyeOff
                  size="20"
                  color={theme.color.grey}
                  strokeWidth="1.5px"
                />
              </Button>
            ))}
          </>
        )}
        {selectedHeading.length !== allHeading.length && (
          <>
            <Flex w="100%" padding="10px 0px 0px 0px">
              <Text fontSize={theme.text.xs} color={theme.color.grey}>
                Hide Columns
              </Text>
              <Spacer />
              <Text
                fontSize={theme.text.xs}
                color={theme.color.accent}
                onClick={() => setTableCategory([...allHeading])}
                cursor="pointer"
              >
                Show All
              </Text>
            </Flex>
            <Divider />
            {allHeading
              .filter((item) => !selectedHeading.includes(item))
              .map((item, index) => (
                <Button
                  size="sm"
                  variant="ghost"
                  key={`option-index-${index}`}
                  w="100%"
                  onClick={() =>
                    setTableCategory(
                      (inc) => !inc.includes(item) && [...inc, item]
                    )
                  }
                >
                  <Text textTransform="capitalize" fontSize={theme.text.xs}>
                    {item}
                  </Text>
                  <Spacer />
                  <IconEye
                    size="20"
                    color={theme.color.grey}
                    strokeWidth="1.5px"
                  />
                </Button>
              ))}
          </>
        )}
      </VStack>
    </Box>
  );
};

export default CustomTableColumnSetting;
