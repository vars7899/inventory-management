import { useEffect, useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  ButtonGroup,
  Spacer,
} from "@chakra-ui/react";
import { theme } from "../../styles/globalTheme.style";
import { toast } from "react-toastify";
import { CREATE_NEW_SUPPLIER, RESET } from "../../redux/feature/supplierSlice";
import { useDispatch, useSelector } from "react-redux";

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

const CreateSupplier = () => {
  const dispatch = useDispatch();
  const { isError, isLoading, message, supplier, isSuccess } = useSelector(
    (state) => state.supplier
  );

  const [supplierData, setSupplierData] = useState(initialState);
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
  // handle form data change
  function handleChange(e) {
    const { name, value } = e.target;
    setSupplierData((current) => ({
      ...current,
      [name]: value,
    }));
  }
  // handle discard button
  function handleDiscard() {
    toast.success("Supplier Details discarded successfully");
    setSupplierData(initialState);
    console.log(supplierData);
  }
  // handle form data submit
  async function handleSubmit(e) {
    e.preventDefault();
    if (
      !name ||
      !street ||
      !city ||
      !state ||
      !country ||
      !postalCode ||
      !phone ||
      !fax ||
      !email ||
      !website
    ) {
      return toast.error(
        "Missing Required field(s), Please fill in all the required fields"
      );
    }
    await dispatch(CREATE_NEW_SUPPLIER(supplierData));
  }
  // handle side effects
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message);
    }
    dispatch(RESET());
  }, [dispatch, isError, isSuccess, message]);

  return (
    <form type="submit" style={{ width: "100%" }}>
      <VStack spacing="20px" mt="20px" mb="10px">
        <FormControl isRequired color={theme.color.grey}>
          <FormLabel>Supplier Name</FormLabel>
          <Input
            type="text"
            size="lg"
            value={name}
            name="name"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired color={theme.color.grey}>
          <FormLabel>Street Address</FormLabel>
          <Input
            type="text"
            size="lg"
            value={street}
            name="street"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired color={theme.color.grey}>
          <FormLabel>City</FormLabel>
          <Input
            type="text"
            size="lg"
            value={city}
            name="city"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired color={theme.color.grey}>
          <FormLabel>State/Province</FormLabel>
          <Input
            type="text"
            size="lg"
            value={state}
            name="state"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired color={theme.color.grey}>
          <FormLabel>Country</FormLabel>
          <Input
            type="text"
            size="lg"
            value={country}
            name="country"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired color={theme.color.grey}>
          <FormLabel>Postal Code</FormLabel>
          <Input
            type="text"
            size="lg"
            value={postalCode}
            name="postalCode"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired color={theme.color.grey}>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="number"
            size="lg"
            value={phone}
            name="phone"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired color={theme.color.grey}>
          <FormLabel>Fax Number</FormLabel>
          <Input
            type="number"
            size="lg"
            value={fax}
            name="fax"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired color={theme.color.grey}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            size="lg"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired color={theme.color.grey}>
          <FormLabel>Website Link</FormLabel>
          <Input
            type="text"
            size="lg"
            value={website}
            name="website"
            onChange={handleChange}
          />
        </FormControl>
        <ButtonGroup w="100%">
          <Button bg={theme.color.grey} mt="40px" onClick={handleDiscard}>
            Discard
          </Button>
          <Spacer />
          <Button
            bg={theme.color.accent}
            mt="40px"
            onClick={handleSubmit}
            isLoading={isLoading}
          >
            Add Supplier
          </Button>
        </ButtonGroup>
      </VStack>
    </form>
  );
};

export default CreateSupplier;
