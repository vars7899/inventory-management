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
} from "@chakra-ui/react";
import { theme } from "../../styles/globalTheme.style";
import { LoginFormArea } from "../Layouts/LoginRegister.style";

const LoginScreen = () => {
  return (
    <LoginRegisterLayout>
      <LogoLarge />
      <br />
      <FlexCenter>
        <TextExtraLarge>
          <Text>Welcome Back</Text>
        </TextExtraLarge>
      </FlexCenter>
      <FlexCenter>
        <TextSmall>
          <TextLight>sign in with your email and password</TextLight>
        </TextSmall>
      </FlexCenter>
      <LoginFormArea>
        <FormControl isRequired color={theme.color.text}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" size="lg" />
          <FormHelperText color={theme.color.grey}>
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl isRequired color={theme.color.text}>
          <FormLabel>Password</FormLabel>
          <Input type="password" size="lg" />
        </FormControl>
        <VStack align="flex-end">
          <Button
            size="lg"
            background={theme.color.red}
            color={theme.color.text}
            width="100%"
          >
            Sign In
          </Button>
          <TextSmall>
            <TextLight>Forgot Password?</TextLight>
          </TextSmall>
        </VStack>
      </LoginFormArea>
    </LoginRegisterLayout>
  );
};

export default LoginScreen;
