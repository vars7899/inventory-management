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
} from "@chakra-ui/react";
import { theme } from "../../styles/globalTheme.style";
import { LoginFormArea } from "../Layouts/LoginRegister.style";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validateEmail } from "../../functions/checkEmail";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, RESET } from "../../redux/feature/authSlice";

// form data initial state
const initialState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, isSuccess, user, message, isLoggedIn } =
    useSelector((state) => state.auth);
  // states
  const [userData, setUserData] = useState(initialState);
  const { password, email } = userData;
  // function to update form data
  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((current) => ({ ...current, [name]: value }));
  }
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isLoggedIn || isSuccess || user) {
      toast.success(message);
      navigate("/dashboard/home");
    }
    dispatch(RESET());
  }, [dispatch, navigate, isSuccess, isError, user, message, isLoggedIn]);
  // function to submit data
  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Missing required field(s)");
    }
    if (!validateEmail(email)) {
      toast.error("Please provide a valid email");
    }
    await dispatch(loginUser(userData));
  }
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
          <Input type="email" size="lg" name="email" onChange={handleChange} />
          <FormHelperText color={theme.color.grey}>
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl isRequired color={theme.color.text}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            size="lg"
            name="password"
            onChange={handleChange}
          />
        </FormControl>
        <VStack align="flex-end">
          <Button
            size="lg"
            background={theme.color.red}
            color={theme.color.text}
            width="100%"
            onClick={handleSubmit}
            isLoading={isLoading}
          >
            Sign In
          </Button>
          <Link to="/reset">
            <TextSmall>
              <TextLight>Forgot Password?</TextLight>
            </TextSmall>
          </Link>
        </VStack>
        <Divider />
        <FlexCenter>
          <Text>
            Don't have an Account ?
            <Link to="/register">
              <TextBold> Register</TextBold>
            </Link>
          </Text>
        </FlexCenter>
      </LoginFormArea>
    </LoginRegisterLayout>
  );
};

export default LoginScreen;
