import React from "react";
import { LogoLarge } from "../../components/Logo/Logo.components";
import {
  TextExtraLarge,
  Text,
  TextLight,
  TextSmall,
  FlexCenter,
} from "../../components/Text/Text.style";
import LoginRegisterLayout from "../Layouts/LoginRegisterLayout";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  VStack,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tabs,
} from "@chakra-ui/react";
import { theme } from "../../styles/globalTheme.style";
import { LoginFormArea } from "../Layouts/LoginRegister.style";
import { IconChevronRight } from "@tabler/icons";

const RegisterScreen = () => {
  return (
    <LoginRegisterLayout>
      <LogoLarge />
      <br />
      <FlexCenter>
        <TextExtraLarge>
          <Text>Hello!!!</Text>
        </TextExtraLarge>
      </FlexCenter>
      <FlexCenter>
        <TextSmall>
          <TextLight>Get started by creating a new account</TextLight>
        </TextSmall>
      </FlexCenter>
      <LoginFormArea>
        <Tabs isFitted>
          <TabList color={theme.color.text}>
            <Tab
              _selected={{
                color: theme.color.accent,
                borderBottomColor: theme.color.accent,
              }}
            >
              About
            </Tab>
            <Tab
              _selected={{
                color: theme.color.accent,
                borderBottomColor: theme.color.accent,
              }}
            >
              Credentials
            </Tab>
            <Tab
              _selected={{
                color: theme.color.accent,
                borderBottomColor: theme.color.accent,
              }}
            >
              Profile
            </Tab>
          </TabList>
          <TabPanels mt="20px">
            <TabPanel>
              <FormControl isRequired color={theme.color.text}>
                <FormLabel>First Name</FormLabel>
                <Input type="text" size="lg" />
              </FormControl>
              <FormControl isRequired color={theme.color.text} mt="20px">
                <FormLabel>Last Name</FormLabel>
                <Input type="text" size="lg" />
              </FormControl>
              <FormControl color={theme.color.text} mt="20px">
                <FormLabel>Contact Information</FormLabel>
                <Input type="number" size="lg" />
              </FormControl>
              <Button
                size="lg"
                mt="30px"
                background={theme.color.red}
                color={theme.color.text}
                width="100%"
                rightIcon={<IconChevronRight />}
              >
                Next
              </Button>
            </TabPanel>
            <TabPanel>
              <FormControl isRequired color={theme.color.text}>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" size="lg" />
              </FormControl>
              <FormControl isRequired color={theme.color.text} mt="20px">
                <FormLabel>Password</FormLabel>
                <Input type="password" size="lg" />
              </FormControl>
              <FormControl isRequired color={theme.color.text} mt="20px">
                <FormLabel>Confirm Password</FormLabel>
                <Input type="tel" size="lg" />
              </FormControl>
              <Button
                size="lg"
                mt="30px"
                background={theme.color.red}
                color={theme.color.text}
                width="100%"
                rightIcon={<IconChevronRight />}
              >
                Next
              </Button>
            </TabPanel>
            <TabPanel>
              {" "}
              <FormControl color={theme.color.text}>
                <FormLabel>Profile Picture</FormLabel>
                <Input type="file" size="lg" variant="flushed" />
              </FormControl>
              <FormControl color={theme.color.text} mt="20px">
                <FormLabel>Bio</FormLabel>
                <Input type="text" size="lg" height="150px" />
              </FormControl>
              <Button
                size="lg"
                mt="30px"
                background={theme.color.red}
                color={theme.color.text}
                width="100%"
                rightIcon={<IconChevronRight />}
              >
                Register
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </LoginFormArea>
    </LoginRegisterLayout>
  );
};

export default RegisterScreen;
