import { useEffect, useState } from "react";
import { LogoLarge } from "../../components/Logo/Logo.components";
import { FlexCenter } from "../../components/Text/Text.style";
import LoginRegisterLayout from "../Layouts/LoginRegisterLayout";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tabs,
  Divider,
  Textarea,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { theme } from "../../styles/globalTheme.style";
import { LoginFormArea } from "../Layouts/LoginRegister.style";
import { IconChevronRight } from "@tabler/icons";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../functions/checkEmail";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, RESET } from "../../redux/feature/authSlice";

// form data initial state
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  cfPassword: "",
  image: "",
  phone: "",
  bio: "",
};

const RegisterScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isSuccess, isError, message, isLoggedIn } =
    useSelector((state) => state.auth);

  // states
  const [currentTab, setCurrentTab] = useState(0);
  const [userData, setUserData] = useState(initialState);
  const { firstName, lastName, email, password, cfPassword } = userData;

  // function to update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isLoggedIn || isSuccess || user) {
      toast.success(message);
      navigate("/dashboard/home");
    }
    dispatch(RESET());
  }, [user, message, isError, isSuccess, navigate, dispatch, isLoggedIn]);

  // function to submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    // check for required fields
    if (!firstName || !lastName || !email || !password || !cfPassword) {
      return toast.error("Please provide all the required fields");
    }
    // check password
    if (password !== cfPassword) {
      toast.error("Password do not match");
      setCurrentTab(1);
    }
    // check if the email is valid
    if (!validateEmail(email)) {
      toast.error("Please provide a valid email");
      setCurrentTab(1);
    }
    // dispatch register user
    dispatch(registerUser(userData));
  };

  return (
    <LoginRegisterLayout>
      <LogoLarge />
      <br />
      <FlexCenter>
        <Text fontSize="6xl" fontWeight="bold" color={theme.color.text}>
          Hello!!!
        </Text>
      </FlexCenter>
      <FlexCenter>
        <Text fontSize="xl" fontWeight="bold" color={theme.color.grey}>
          Get started by creating a new account
        </Text>
      </FlexCenter>
      <LoginFormArea>
        <Tabs isFitted index={currentTab}>
          <TabList color={theme.color.text}>
            <Tab
              _selected={{
                color: theme.color.accent,
                borderBottomColor: theme.color.accent,
              }}
              onClick={() => setCurrentTab(0)}
            >
              About
            </Tab>
            <Tab
              _selected={{
                color: theme.color.accent,
                borderBottomColor: theme.color.accent,
              }}
              isDisabled={currentTab <= 0 || !firstName || !lastName}
              onClick={() => setCurrentTab(1)}
            >
              Credentials
            </Tab>
            <Tab
              _selected={{
                color: theme.color.accent,
                borderBottomColor: theme.color.accent,
              }}
              isDisabled={currentTab <= 1 || !email || !password || !cfPassword}
              onClick={() => setCurrentTab(2)}
            >
              Profile
            </Tab>
          </TabList>
          <TabPanels mt="20px">
            <TabPanel>
              <FormControl isRequired color={theme.color.text}>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  size="lg"
                  name="firstName"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired color={theme.color.text} mt="20px">
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  size="lg"
                  name="lastName"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl color={theme.color.text} mt="20px">
                <FormLabel>Contact Information</FormLabel>
                <Input
                  type="number"
                  size="lg"
                  name="phone"
                  onChange={handleChange}
                />
              </FormControl>
              <Button
                size="lg"
                mt="30px"
                background={theme.color.red}
                color={theme.color.text}
                width="100%"
                rightIcon={<IconChevronRight />}
                onClick={() => setCurrentTab(1)}
                isDisabled={!firstName || !lastName}
              >
                Next
              </Button>
              <Divider m="20px 0px" />
              <Flex
                alignItems="center"
                justifyContent="center"
                flexDirection="row"
                color={theme.color.grey}
              >
                <Text>Already have an Account ? </Text>
                <Link to="/login">
                  <Text fontWeight="bold">Sign In</Text>
                </Link>
              </Flex>
            </TabPanel>
            <TabPanel>
              <FormControl isRequired color={theme.color.text}>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  size="lg"
                  name="email"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired color={theme.color.text} mt="20px">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  size="lg"
                  name="password"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired color={theme.color.text} mt="20px">
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  size="lg"
                  name="cfPassword"
                  onChange={handleChange}
                />
              </FormControl>
              <Button
                size="lg"
                mt="30px"
                background={theme.color.red}
                color={theme.color.text}
                width="100%"
                rightIcon={<IconChevronRight />}
                onClick={() => setCurrentTab(2)}
                isDisabled={!email || !password || !cfPassword}
              >
                Next
              </Button>
            </TabPanel>
            <TabPanel>
              <FormControl color={theme.color.text}>
                <FormLabel>Profile Picture</FormLabel>
                <Input
                  type="file"
                  size="lg"
                  variant="flushed"
                  name="image"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl color={theme.color.text} mt="20px">
                <FormLabel>Bio</FormLabel>
                <Textarea
                  size="lg"
                  minHeight="150px"
                  name="bio"
                  onChange={handleChange}
                />
              </FormControl>
              <Button
                size="lg"
                mt="30px"
                background={theme.color.red}
                color={theme.color.text}
                width="100%"
                rightIcon={<IconChevronRight />}
                onClick={(e) => handleSubmit(e)}
                isLoading={isLoading}
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
