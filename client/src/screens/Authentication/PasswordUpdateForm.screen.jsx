import React from "react";
import { LogoLarge } from "../../components/Logo/Logo.components";
import {
  TextExtraLarge,
  Text,
  TextLight,
  TextSmall,
  FlexCenter,
  TextBold,
} from "../../components/Text/Text.style";
import LoginRegisterLayout from "../Layouts/LoginRegisterLayout";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  VStack,
  Divider,
  Box,
  Flex,
} from "@chakra-ui/react";
import { theme } from "../../styles/globalTheme.style";
import { LoginFormArea } from "../Layouts/LoginRegister.style";
import { Link } from "react-router-dom";

const PasswordUpdateForm = () => {
  return (
    <LoginRegisterLayout>
      <LogoLarge />
      <br />
      <Box p="20px">
        <Flex>
          <TextExtraLarge>
            <Text>Reset Password</Text>
          </TextExtraLarge>
        </Flex>
        <Flex>
          <TextSmall>
            <TextLight>
              Enter a strong password. Use combination of alphabets,numbers and
              special character.{" "}
            </TextLight>
          </TextSmall>
        </Flex>
      </Box>
      <LoginFormArea>
        <FormControl isRequired color={theme.color.text}>
          <FormLabel>Password</FormLabel>
          <Input type="password" size="lg" />
        </FormControl>
        <FormControl isRequired color={theme.color.text}>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" size="lg" />
        </FormControl>
        <VStack align="flex-end">
          <Button
            size="lg"
            background={theme.color.red}
            color={theme.color.text}
            width="100%"
          >
            Update Password
          </Button>
        </VStack>
        <Divider />
        <FlexCenter>
          <Text>
            Already have an Account ?
            <Link to="/login">
              <TextBold> Sign In</TextBold>
            </Link>
          </Text>
        </FlexCenter>
      </LoginFormArea>
    </LoginRegisterLayout>
  );
};

export default PasswordUpdateForm;
