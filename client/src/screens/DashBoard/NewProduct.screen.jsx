import {
  Button,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Box,
  IconButton,
  Input,
  Radio,
  Select,
  Spacer,
  Tag,
  TagLabel,
  TagRightIcon,
  Textarea,
  useToast,
  VStack,
  Text,
  Wrap,
  Divider,
} from "@chakra-ui/react";
import { IconChevronLeft, IconX } from "@tabler/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomHeaderContainer from "../../components/CustomHeaderContainer/CustomHeaderContainer.component";
import CustomImageDrop from "../../components/CustomImageDrop/CustomImageDrop.component";
import { theme } from "../../styles/globalTheme.style";
import Layout from "../Layout";

const NewProduct = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState([]);
  // Move the category to background
  const categoryOption = [
    "raw material",
    "work-in progress",
    "finished product",
    "packaging material",
    "safety stock",
    "smoothing material",
    "decoupling",
    "MRO goods",
  ];
  // handle category select option
  function handleSelect(event) {
    const addToList = event.target.value;
    // Check if the category already exist
    if (selectedCategory.includes(addToList)) {
      toast({
        title: `${addToList} category already added`,
        isClosable: true,
        duration: 5000,
        status: "warning",
        position: "top-right",
      });
      return;
    }
    setSelectedCategory((current) => {
      return [...current, addToList];
    });
  }
  // handle unselect a category
  function handleUnselectCategory(toBeRemoved) {
    setSelectedCategory((current) =>
      current.filter((category) => category !== toBeRemoved)
    );
    return toast({
      title: `${toBeRemoved} category removed`,
      isClosable: true,
      duration: 5000,
      status: "success",
      position: "top-right",
    });
  }
  return (
    <Layout>
      <Flex alignItems="center" paddingBottom="20px">
        <IconButton
          icon={<IconChevronLeft />}
          onClick={() => navigate("/dashboard/product")}
        />
        <VStack marginLeft="20px">
          <Text
            w="100%"
            lineHeight="0.75rem"
            fontSize="sm"
            fontWeight="bold"
            color={theme.color.grey}
          >
            Back to Product List
          </Text>
          <Text fontSize="2xl" lineHeight="1.25rem" fontWeight="bold">
            Add New Product
          </Text>
        </VStack>
      </Flex>
      <Divider />
      <Grid
        padding="20px 0px"
        gridGap={{ base: "20px", xl: "25px" }}
        gridTemplateColumns={{ base: "1fr", xl: "1fr 1fr" }}
      >
        <VStack spacing={{ base: "20px", xl: "25px" }}>
          {/* Product description */}
          <CustomHeaderContainer given_text="Description">
            <FormControl isRequired>
              <FormLabel>Product Name</FormLabel>
              <Input type="text" variant="outline" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Business Description</FormLabel>
              <Textarea minH={{ base: "100px", xl: "190px" }} />
            </FormControl>
          </CustomHeaderContainer>
          {/* Product category */}
          <CustomHeaderContainer given_text="Category">
            <FormControl isRequired>
              <FormLabel>Product Category</FormLabel>
              <Select onChange={(e) => handleSelect(e)}>
                <option></option>
                {categoryOption.map((category, index) => {
                  return (
                    <option value={category} key={`category-${index}`}>
                      {category}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
            <Wrap mt={{ base: "10px", xl: "20px" }}>
              {selectedCategory.map((category, index) => (
                <Tag
                  size={{ base: "md", xl: "lg" }}
                  key={`category-select-${index}`}
                >
                  <TagLabel textTransform="capitalize">{category}</TagLabel>
                  <TagRightIcon
                    as={IconX}
                    onClick={() => handleUnselectCategory(category)}
                  />
                </Tag>
              ))}
            </Wrap>
          </CustomHeaderContainer>

          {/* Inventory Information */}
          <CustomHeaderContainer given_text="Inventory">
            <FormControl isRequired>
              <FormLabel>Supplier</FormLabel>
              <Select>
                <option></option>
                {categoryOption.map((category, index) => {
                  return (
                    <option value={category} key={`category-${index}`}>
                      {category}
                    </option>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>SKU</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Quantity</FormLabel>
              <Input type="number" />
            </FormControl>
          </CustomHeaderContainer>
        </VStack>
        <VStack spacing={{ base: "20px", xl: "25px" }}>
          {/* Image Upload */}
          <CustomHeaderContainer given_text="Product Image">
            <CustomImageDrop />
          </CustomHeaderContainer>
          {/* Selling Type */}
          <CustomHeaderContainer given_text="Selling Type">
            <VStack w="100%">
              <Radio value="online" w="100%">
                Online Selling only
              </Radio>
              <Radio value="in-store" w="100%">
                In-Store Selling only
              </Radio>
              <Radio value="both" w="100%">
                Both Online & In-Store Selling
              </Radio>
            </VStack>
          </CustomHeaderContainer>
          {/* shipping and delivery */}
          <CustomHeaderContainer given_text="Shipping and Delivery">
            <FormControl isRequired>
              <FormLabel>Weight</FormLabel>
              <Input type="number" />
              <FormHelperText>Weight in Grams</FormHelperText>
            </FormControl>
            <Grid gridTemplateColumns="repeat(3, 1fr)" gridGap="20px">
              <FormControl isRequired>
                <FormLabel>Length</FormLabel>
                <Input type="number" />
                <FormHelperText>mm</FormHelperText>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Breath</FormLabel>
                <Input type="number" />
                <FormHelperText>mm</FormHelperText>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Height</FormLabel>
                <Input type="number" />
                <FormHelperText>mm</FormHelperText>
              </FormControl>
            </Grid>
          </CustomHeaderContainer>
          {/* pricing */}
          <CustomHeaderContainer given_text="Pricing">
            <FormControl isRequired>
              <FormLabel>Price</FormLabel>
              <Input type="number" />
            </FormControl>
          </CustomHeaderContainer>
          <Flex width="100%">
            <Button>Discard</Button>
            <Spacer />
            <Button>Add New Product</Button>
          </Flex>
        </VStack>
      </Grid>
    </Layout>
  );
};

export default NewProduct;
