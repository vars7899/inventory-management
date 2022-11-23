import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { RESET, userForgotPassword } from "../../redux/feature/authSlice";
import { toast } from "react-toastify";

const PasswordResetEmail = () => {
  const dispatch = useDispatch();
  const { isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [email, setEmail] = useState({ email: "" });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const handleTypeChange = (e) => {
    const { name, value } = e.target;
    setEmail(() => ({ [name]: value }));
    if (validateEmail(value)) {
      setIsDisabled(() => false);
      return;
    }
    setIsDisabled(() => true);
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
      setIsDisabled(false);
    }
    if (isSuccess) {
      toast.success(message);
      setShowSuccess(() => true);
    }
    dispatch(RESET());
  });
  const handleSubmit = async () => {
    setIsDisabled(() => true);
    console.log(email);
    await dispatch(userForgotPassword(email));
  };
  return (
    <LoginRegisterLayout>
      <LogoLarge />
      <br />
      <Box p="20px">
        <Flex mb="10px">
          <Text
            fontSize="6xl"
            fontWeight="bold"
            lineHeight="4rem"
            color={theme.color.text}
          >
            Reset Password
          </Text>
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
              name="email"
              onChange={handleTypeChange}
            />
          </FormControl>
        ) : (
          <Text color={theme.color.text}>
            Please check your provided email for reset password link
          </Text>
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
          <Text color={theme.color.grey}>Already have an Account ? </Text>
          <Link to="/login">
            <Text color={theme.color.grey} fontWeight="bold">
              Login
            </Text>
          </Link>
        </FlexCenter>
      </LoginFormArea>
    </LoginRegisterLayout>
  );
};

export default PasswordResetEmail;
