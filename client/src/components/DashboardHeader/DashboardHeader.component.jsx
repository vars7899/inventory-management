import { useEffect } from "react";
import {
  DashboardHeaderContainer,
  DashboardHeaderLeft,
  DashboardHeaderRight,
  UserAvatar,
  UserAvatarOption,
  UserNameOption,
} from "./DashboardHeader.style";
import {
  IconAlertTriangle,
  IconBell,
  IconChevronDown,
  IconMail,
  IconMenu2,
} from "@tabler/icons";
import { Box, Button, Flex, Text, VStack, IconButton } from "@chakra-ui/react";
import { theme } from "../../styles/globalTheme.style";
import { getDayName, toMonthName } from "../../functions/monthName";
import CustomModal from "../CustomModal/CustomModal.component";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser, RESET } from "../../redux/feature/authSlice";
import { toast } from "react-toastify";
import { SET_SIDE_BAR_MINI } from "../../redux/feature/appSlice";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSuccess, isError, message, isLoading, name, isLoggedIn } =
    useSelector((state) => state.auth);
  const current_date = new Date();
  const date_string = `${current_date.getDate()}  ${toMonthName(
    current_date.getMonth()
  )} ${current_date.getFullYear()}`;
  const day_name = getDayName(current_date.getDate());

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    // TODO check this
    // if (isSuccess && !isLoggedIn) {
    //   navigate("/");
    // }
    dispatch(RESET());
  }, [dispatch, isError, isSuccess, navigate]);

  function handleLogout() {
    // if (user) {
    dispatch(logoutUser());
    // }
  }

  return (
    <DashboardHeaderContainer>
      <Flex alignItems="center">
        {
          <IconButton
            icon={<IconMenu2 color={theme.color.accent} size="30px" />}
            variant="outline"
            borderColor={theme.color.grey}
            onClick={() => dispatch(SET_SIDE_BAR_MINI())}
          />
        }
        <Flex flexDirection="column" ml="20px">
          <Text fontSize="xl" fontWeight="bold" color={theme.color.text}>
            {day_name}
          </Text>
          <Text fontSize="sm" fontWeight="bold" color={theme.color.grey}>
            {date_string}
          </Text>
        </Flex>
      </Flex>

      <DashboardHeaderRight>
        <IconButton
          children={
            <IconBell size={30} stroke={1.5} color={theme.color.grey} />
          }
        />
        <IconButton
          children={
            <IconMail size={30} stroke={1.5} color={theme.color.grey} />
          }
        />
        <UserAvatarOption>
          <UserAvatar />
          <UserNameOption>
            <Text>
              {name?.firstName} {name?.lastName}
            </Text>
            <CustomModal
              heading="User Profile"
              element={
                <VStack spacing="10px">
                  <Text>Profile Settings</Text>
                  <Button w="100%" onClick={handleLogout} isLoading={isLoading}>
                    Logout
                  </Button>
                </VStack>
              }
            >
              <IconChevronDown
                size={30}
                stroke={1.5}
                color={theme.color.grey}
              />
            </CustomModal>
          </UserNameOption>
        </UserAvatarOption>
        <IconButton
          children={
            <IconAlertTriangle
              size={30}
              stroke={1.5}
              color={theme.color.grey}
            />
          }
        />
      </DashboardHeaderRight>
    </DashboardHeaderContainer>
  );
};

export default DashboardHeader;
