import React, { useEffect, useState } from "react";
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
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RESET, userResetPassword } from "../../redux/feature/authSlice";
import { toast } from "react-toastify";

const initialState = {
  newPassword: "",
  newCfPassword: "",
};

const PasswordUpdateForm = () => {
  const dispatch = useDispatch();
  const { resetToken } = useParams();
  const { isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const [updatePassword, setUpdatePassword] = useState(initialState);
  function handleChange(e) {
    const { name, value } = e.target;
    setUpdatePassword((current) => ({ ...current, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userResetPassword({ updatePassword, resetToken }));
  }
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message);
    }
    dispatch(RESET());
  }, [isError, message, isSuccess, dispatch]);
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
          <Input
            type="password"
            size="lg"
            name="newPassword"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired color={theme.color.text}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            size="lg"
            name="newCfPassword"
            onChange={handleChange}
          />
        </FormControl>
        <VStack align="flex-end">
          <Button
            size="lg"
            background={theme.color.red}
            color={theme.color.text}
            width="100%"
            isLoading={isLoading}
            onClick={handleSubmit}
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
