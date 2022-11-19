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
import React from "react";

const CreateSupplier = () => {
  return (
    <VStack spacing="20px" mt="20px" mb="70px">
      <FormControl isRequired color={theme.color.grey}>
        <FormLabel>Supplier Name</FormLabel>
        <Input type="email" size="lg" />
      </FormControl>
      <FormControl isRequired color={theme.color.grey}>
        <FormLabel>Street Address</FormLabel>
        <Input type="email" size="lg" />
      </FormControl>
      <FormControl isRequired color={theme.color.grey}>
        <FormLabel>City</FormLabel>
        <Input type="email" size="lg" />
      </FormControl>
      <FormControl isRequired color={theme.color.grey}>
        <FormLabel>State/Province</FormLabel>
        <Input type="email" size="lg" />
      </FormControl>
      <FormControl isRequired color={theme.color.grey}>
        <FormLabel>Country</FormLabel>
        <Input type="email" size="lg" />
      </FormControl>
      <FormControl isRequired color={theme.color.grey}>
        <FormLabel>Postal Code</FormLabel>
        <Input type="email" size="lg" />
      </FormControl>
      <FormControl isRequired color={theme.color.grey}>
        <FormLabel>Phone Number</FormLabel>
        <Input type="email" size="lg" />
      </FormControl>
      <FormControl isRequired color={theme.color.grey}>
        <FormLabel>Fax Number</FormLabel>
        <Input type="email" size="lg" />
      </FormControl>
      <FormControl isRequired color={theme.color.grey}>
        <FormLabel>Email</FormLabel>
        <Input type="email" size="lg" />
      </FormControl>
      <FormControl isRequired color={theme.color.grey}>
        <FormLabel>Website Link</FormLabel>
        <Input type="email" size="lg" />
      </FormControl>
      <ButtonGroup w="100%">
        <Button bg={theme.color.grey}>Discard</Button>
        <Spacer />
        <Button bg={theme.color.accent}>Add Supplier</Button>
      </ButtonGroup>
    </VStack>
  );
};

export default CreateSupplier;
