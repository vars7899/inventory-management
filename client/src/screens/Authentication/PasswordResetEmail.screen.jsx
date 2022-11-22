import React, { useState } from "react";
import { LogoLarge } from "../../components/Logo/Logo.components";
import LoginRegisterLayout from "../Layouts/LoginRegisterLayout";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Box,
  VStack,
  Flex,
  Divider,
  Text,
} from "@chakra-ui/react";
import { theme } from "../../styles/globalTheme.style";
import { LoginFormArea } from "../Layouts/LoginRegister.style";
import {
  TextExtraLarge,
  TextLight,
  TextSmall,
  FlexCenter,
  TextBold,
} from "../../components/Text/Text.style";
import { Link } from "react-router-dom";
import { validateEmail } from "../../functions/checkEmail";

const PasswordResetEmail = () => {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const handleTypeChange = (text) => {
    setEmail(text);
    if (validateEmail(text)) {
      setIsDisabled(() => false);
      return;
    }
    setIsDisabled(() => true);
  };
  const handleSubmit = () => {
    setShowSuccess(() => true);
    setIsDisabled(() => true);
  };
  return (
    <LoginRegisterLayout>
      <LogoLarge />
      <br />
      <Box p="20px">
        <Flex mb="10px">
          <TextExtraLarge>
            <Text>Reset Password</Text>
          </TextExtraLarge>
        </Flex>
        <Flex>
          <TextSmall>
            <TextLight>
              Enter the email address associated with your account and we'll
              send an email with a link to reset your password
            </TextLight>
          </TextSmall>
        </Flex>
      </Box>

      <LoginFormArea>
        {!showSuccess ? (
          <FormControl isRequired color={theme.color.text}>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              size="lg"
              onChange={(e) => handleTypeChange(e.target.value)}
            />
          </FormControl>
        ) : (
          <Text>Please check your provided email for reset password link</Text>
        )}
        <VStack align="flex-end">
          <Button
            size="lg"
            background={theme.color.red}
            color={theme.color.text}
            width="100%"
            isDisabled={isDisabled}
            onClick={handleSubmit}
          >
            {showSuccess ? "Link sent" : "Send Reset Link"}
          </Button>
        </VStack>
        <Divider />
        <FlexCenter>
          <Text>
            Already have an Account ?
            <Link to="/login">
              <TextBold> Login</TextBold>
            </Link>
          </Text>
        </FlexCenter>
      </LoginFormArea>
    </LoginRegisterLayout>
  );
};

export default PasswordResetEmail;
