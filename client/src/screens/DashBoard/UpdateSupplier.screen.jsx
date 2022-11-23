import { useRedirectLoggedOut } from "../../hooks/useRedirect";
import { useParams } from "react-router-dom";
import Layout from "../Layouts/Layout";
import DashboardTabHeader from "../../components/DashboardTabHeader/DashboardTabHeader.component";
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  Box,
  Text,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { IconDeviceFloppy } from "@tabler/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomHeaderContainer from "../../components/CustomHeaderContainer/CustomHeaderContainer.component";
import { theme } from "../../styles/globalTheme.style";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_SUPPLIER,
  GET_SUPPLIER,
  RESET,
  UPDATE_SUPPLIER,
} from "../../redux/feature/supplierSlice";
import CustomLoader from "../../components/CustomLoader/CustomLoader.component";

const initialState = {
  name: "",
  street: "",
  city: "",
  state: "",
  country: "",
  postalCode: "",
  phone: "",
  fax: "",
  email: "",
  website: "",
};

const UpdateSupplier = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    isError,
    isLoading,
    isDeletedSuccess,
    isUpdatedSuccess,
    message,
    supplier,
  } = useSelector((state) => state.supplier);
  const [supplierData, setSupplierData] = useState(supplier);
  const {
    name,
    street,
    city,
    state,
    country,
    postalCode,
    phone,
    fax,
    email,
    website,
  } = supplierData;

  const { supplierId } = useParams();
  useRedirectLoggedOut("/login", `/dashboard/supplier/${supplierId}`);
  // handle supplier delete
  function handleDelete() {
    if (!supplierId) {
      return toast.error("Invalid or empty Supplier ID");
    }
    const data = dispatch(DELETE_SUPPLIER(supplierId));
    console.log(data);
  }
  // handle form data change
  function handleChange(e) {
    const { name, value } = e.target;
    setSupplierData((current) => ({
      ...current,
      [name]: value,
    }));
  }
  // handle supplier update
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(UPDATE_SUPPLIER({ supplierData, supplierId }));
    console.log(supplierData);
  }
  // handle side effects
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isDeletedSuccess || isUpdatedSuccess) {
      toast.success(message);
      navigate("/dashboard/supplier");
    }
    dispatch(RESET());
  }, [
    dispatch,
    isError,
    isDeletedSuccess,
    isUpdatedSuccess,
    navigate,
    message,
  ]);
  useEffect(() => {
    dispatch(GET_SUPPLIER(supplierId));
  }, [dispatch]);

  if (!isLoading || !supplier) {
    <CustomLoader />;
  }
  if (supplier) {
    return (
      <Layout>
        <DashboardTabHeader
          addElement={
            <Button
              color={theme.color.text}
              bg={theme.color.accent}
              leftIcon={<IconDeviceFloppy size="25px" strokeWidth="1.5px" />}
              fontSize={{ base: "0px", lg: "md" }}
              onClick={handleSubmit}
            >
              Update Supplier
            </Button>
          }
        />
        <Grid
          padding="20px 0px"
          gridGap={{ base: "20px", xl: "25px" }}
          gridTemplateColumns={{
            base: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {/* Supplier description */}
          <CustomHeaderContainer given_text="Supplier Information">
            <FormControl isRequired>
              <FormLabel>Supplier Name</FormLabel>
              <Input
                type="text"
                value={name}
                name="name"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Website</FormLabel>
              <Input
                type="text"
                value={website}
                name="website"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Phone number</FormLabel>
              <Input
                type="number"
                value={phone}
                name="phone"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Fax number</FormLabel>
              <Input
                type="number"
                value={fax}
                name="fax"
                onChange={handleChange}
              />
            </FormControl>
          </CustomHeaderContainer>
          {/* Address information */}
          <CustomHeaderContainer given_text="Address">
            <FormControl isRequired>
              <FormLabel>Street Address</FormLabel>
              <Input
                type="text"
                value={street}
                name="street"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                value={city}
                name="city"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>State/Province</FormLabel>
              <Input
                type="text"
                value={state}
                name="state"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Country</FormLabel>
              <Input
                type="text"
                value={country}
                name="country"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Postal Code</FormLabel>
              <Input
                type="text"
                value={postalCode}
                name="postalCode"
                onChange={handleChange}
              />
            </FormControl>
          </CustomHeaderContainer>
          <CustomHeaderContainer given_text="Danger Zone">
            <Accordion w="100%" allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Delete Supplier record permanently
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text color={theme.color.alert} fontWeight="bold" mb="20px">
                    WARNING: By performing the following operation supplier data
                    will be permanently deleted from the records.
                  </Text>
                  <Button
                    w="100%"
                    bg={theme.color.alert}
                    onClick={handleDelete}
                    isLoading={isLoading}
                  >
                    I understand
                  </Button>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CustomHeaderContainer>
        </Grid>
      </Layout>
    );
  }
};

export default UpdateSupplier;
