import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Text,
  Grid,
  VStack,
  Textarea,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  GridItem,
  Image,
  HStack,
  AspectRatio,
  Divider,
  Wrap,
  Select,
  Radio,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { IconPlus } from "@tabler/icons";
import { useState } from "react";
import { toast } from "react-toastify";
import CustomHeaderContainer from "../../components/CustomHeaderContainer/CustomHeaderContainer.component";
import CustomImageDrop from "../../components/CustomImageDrop/CustomImageDrop.component";
import CustomTable from "../../components/CustomTable/CustomTable.component";
import DashboardTabHeader from "../../components/DashboardTabHeader/DashboardTabHeader.component";
import { theme } from "../../styles/globalTheme.style";
import Layout from "../Layouts/Layout";

const imagesSrc = [
  "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650753933/cmfw72t3bncwragfgh6m.png",
  "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650731632/vk52jpvgq4fpgdyitwao.png",
  "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650731554/yaqdzbxtutrgkvlgbj3o.png",
  "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650753933/cmfw72t3bncwragfgh6m.png",
  "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650731632/vk52jpvgq4fpgdyitwao.png",
  "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650731554/yaqdzbxtutrgkvlgbj3o.png",
  "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650753933/cmfw72t3bncwragfgh6m.png",
  "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650731632/vk52jpvgq4fpgdyitwao.png",
  "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650731554/yaqdzbxtutrgkvlgbj3o.png",
  "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650753933/cmfw72t3bncwragfgh6m.png",
  "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650731632/vk52jpvgq4fpgdyitwao.png",
  "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650731554/yaqdzbxtutrgkvlgbj3o.png",
  "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650753933/cmfw72t3bncwragfgh6m.png",
  "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650731632/vk52jpvgq4fpgdyitwao.png",
  "https://res.cloudinary.com/dfcaehp0b/image/upload/v1650731554/yaqdzbxtutrgkvlgbj3o.png",
];
const orderHistory = [
  {
    _id: "83ht498ht9083h4t",
    product: "Sony MDR X400",
    supplier: "Sony Manufacturing Japan",
    quantity: 40,
  },
];

const initialState = {
  name: "",
  desc: "",
};

const ProductOverview = () => {
  const [currentImage, setCurrentImage] = useState(imagesSrc[0]);
  const [productData, setProductData] = useState(initialState);
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
      toast.success(`${addToList} added to list successfully`);
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
    return toast.success(`${toBeRemoved} category removed`);
  }
  return (
    <Layout>
      <DashboardTabHeader backTo="/dashboard/product" />
      <Box bg="whiteAlpha.200" w="100%" mt="20px">
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab
              _selected={{ bg: theme.color.accent, color: theme.color.text }}
            >
              Overview
            </Tab>
            <Tab
              _selected={{ bg: theme.color.accent, color: theme.color.text }}
            >
              Supplier
            </Tab>
            <Tab
              _selected={{ bg: theme.color.accent, color: theme.color.text }}
            >
              Purchases History
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex justifyContent="start" alignItems="center">
                <Box w="100%">
                  <Text fontSize="2xl" fontWeight="bold">
                    Product Information
                  </Text>
                  <Divider margin="20px 0px" />
                  <Grid
                    gridTemplateColumns="minmax(300px, 500px) 1fr"
                    gridGap="50px"
                  >
                    <Box>
                      <Text fontSize="lg" mb="10px">
                        Primary Information
                      </Text>
                      <Text fontSize="sm" color={theme.color.grey}>
                        Product information, this information will be shown
                        publicly. Please make sure all the information provided
                        is right.
                      </Text>
                    </Box>
                    <VStack spacing="30px" maxW="100%">
                      <FormControl isRequired>
                        <FormLabel>Product Name</FormLabel>
                        <Input type="text" variant="outline" />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Product Description</FormLabel>
                        <Textarea variant="outline" />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Threshold Stock Qty</FormLabel>
                        <Input type="number" variant="outline" />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Product Category</FormLabel>
                        <Select onChange={(e) => handleSelect(e)}>
                          <option></option>
                          {categoryOption.map((category, index) => {
                            return (
                              <option
                                value={category}
                                key={`category-${index}`}
                              >
                                {category}
                              </option>
                            );
                          })}
                        </Select>
                        <Wrap mt={{ base: "10px", xl: "20px" }}>
                          {selectedCategory.map((category, index) => (
                            <Tag
                              size={{ base: "md", xl: "lg" }}
                              key={`category-select-${index}`}
                            >
                              <TagLabel textTransform="capitalize">
                                {category}
                              </TagLabel>
                              <TagRightIcon
                                as={IconX}
                                onClick={() => handleUnselectCategory(category)}
                              />
                            </Tag>
                          ))}
                        </Wrap>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Product Image</FormLabel>
                        <HStack
                          spacing="10px"
                          mt="20px"
                          overflowX="scroll"
                          maxW="750px"
                          paddingBottom="10px"
                        >
                          <Flex
                            align="center"
                            justifyContent="center"
                            borderRadius="10px"
                            border={`1px dashed ${theme.color.grey}`}
                            minWidth="100px"
                            height="100px"
                          >
                            <IconPlus />
                          </Flex>
                          {imagesSrc.map((item, index) => (
                            <Box
                              minWidth="100px"
                              height="100px"
                              key={`image-car-${index}`}
                              onClick={() => setCurrentImage(item)}
                            >
                              <Image
                                src={item}
                                objectFit="cover"
                                borderRadius="10px"
                                height="100px"
                                width="100px"
                              />
                            </Box>
                          ))}
                        </HStack>
                      </FormControl>
                    </VStack>
                  </Grid>
                  <Divider margin="20px 0px" />
                  <Grid
                    gridTemplateColumns="minmax(300px, 500px) 1fr"
                    gridGap="50px"
                  >
                    <Box>
                      <Text fontSize="lg" mb="10px">
                        Inventory Details
                      </Text>
                      <Text fontSize="sm" color={theme.color.grey}>
                        Product information related to packaging dimension,
                        please make sure the provided dimension and weight are
                        accurate to calculate the delivery charges.
                      </Text>
                    </Box>
                    <VStack spacing="30px">
                      <FormControl isRequired>
                        <FormLabel>Weight</FormLabel>
                        <Input type="number" />
                        <FormHelperText>Weight in Grams</FormHelperText>
                      </FormControl>
                      <Grid
                        gridTemplateColumns="repeat(3, 1fr)"
                        gridGap="20px"
                        w="100%"
                      >
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
                    </VStack>
                  </Grid>
                  <Divider margin="20px 0px" />
                  <Grid
                    gridTemplateColumns="minmax(300px, 500px) 1fr"
                    gridGap="50px"
                  >
                    <Box>
                      <Text fontSize="lg" mb="10px">
                        Supply and Price
                      </Text>
                      <Text fontSize="sm" color={theme.color.grey}>
                        Product availability for different vendor type, please
                        make sure all the information provided is accurate
                      </Text>
                    </Box>
                    <VStack spacing="30px">
                      <FormControl isRequired>
                        <FormLabel>Price</FormLabel>
                        <Input type="number" variant="outline" />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Quantity</FormLabel>
                        <Input type="number" variant="outline" />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Product Availability</FormLabel>
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
                      </FormControl>
                    </VStack>
                  </Grid>
                  <Divider margin="20px 0px" />
                  <Grid
                    gridTemplateColumns="minmax(300px, 500px) 1fr"
                    gridGap="50px"
                  >
                    <Box>
                      <Text fontSize="lg" mb="10px">
                        Danger Zone
                      </Text>
                      <Text fontSize="sm" color={theme.color.grey}>
                        All operation listed in the danger zone are permanent
                        and the requested records will be modified or deleted
                        permanently from the database. please make sure your are
                        modifying the right record.
                      </Text>
                    </Box>
                    <VStack spacing="30px">
                      <FormControl isRequired>
                        <FormLabel>Delete this product</FormLabel>
                        <Button colorScheme="red" w="100%">
                          I understand, proceed to delete
                        </Button>
                        <FormHelperText>
                          Product information will be deleted permanently
                        </FormHelperText>
                      </FormControl>
                    </VStack>
                  </Grid>
                </Box>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex justifyContent="start" alignItems="center">
                <Box w="100%">
                  <Text fontSize="2xl" fontWeight="bold">
                    Supplier Information
                  </Text>
                  <Divider margin="20px 0px" />
                  <Grid
                    gridTemplateColumns="minmax(300px, 500px) 1fr"
                    gridGap="50px"
                  >
                    <Box>
                      <Text fontSize="lg" mb="10px">
                        Primary Information
                      </Text>
                      <Text fontSize="sm" color={theme.color.grey}>
                        Supplier information for the current product, to update
                        the supplier information go to supplier tab.
                      </Text>
                    </Box>
                    <Box>
                      <FormControl isRequired>
                        <FormLabel>Supplier Name</FormLabel>
                        <Input type="text" variant="outline" />
                      </FormControl>
                    </Box>
                  </Grid>
                  <Divider margin="20px 0px" />
                  <Grid
                    gridTemplateColumns="minmax(300px, 500px) 1fr"
                    gridGap="50px"
                  >
                    <Box>
                      <Text fontSize="lg" mb="10px">
                        Supplier Address
                      </Text>
                      <Text fontSize="sm" color={theme.color.grey}>
                        Supplier Address information for the current product, to
                        update the supplier information go to supplier tab.
                      </Text>
                    </Box>
                    <VStack spacing="30px">
                      <FormControl isRequired>
                        <FormLabel>Street Address</FormLabel>
                        <Input type="text" variant="outline" />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>City Name</FormLabel>
                        <Input type="text" variant="outline" />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>State</FormLabel>
                        <Input type="text" variant="outline" />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Country</FormLabel>
                        <Input type="text" variant="outline" />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Postal Code</FormLabel>
                        <Input type="text" variant="outline" />
                      </FormControl>
                    </VStack>
                  </Grid>
                  <Divider margin="20px 0px" />
                  <Grid
                    gridTemplateColumns="minmax(300px, 500px) 1fr"
                    gridGap="50px"
                  >
                    <Box>
                      <Text fontSize="lg" mb="10px">
                        Supplier Contact Information
                      </Text>
                      <Text fontSize="sm" color={theme.color.grey}>
                        Supplier Contact information, please make sure all the
                        contact information is correct, to update go to supplier
                        tab.
                      </Text>
                    </Box>
                    <VStack spacing="30px">
                      <FormControl isRequired>
                        <FormLabel>Phone Number</FormLabel>
                        <Input type="text" variant="outline" />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel>Fax Number</FormLabel>
                        <Input type="text" variant="outline" />
                      </FormControl>
                    </VStack>
                  </Grid>
                </Box>
              </Flex>
            </TabPanel>
            <TabPanel>
              <CustomTable given_data={orderHistory} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Layout>
  );
};

export default ProductOverview;
