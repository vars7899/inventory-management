import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  IconButton,
  Input,
  Spacer,
  Box,
  Divider,
  Button,
} from "@chakra-ui/react";
import { supplier_data } from "../../data/dummy";
import {
  IconColumns,
  IconDotsVertical,
  IconPlus,
  IconSearch,
} from "@tabler/icons";
import { theme } from "../../styles/globalTheme.style.js";
import CustomPopover from "../CustomPopover/CustomPopover.components";
import TableColumn from "./TableColumn.components";
import CustomModal from "../CustomModal/CustomModal.component";
import CreateSupplier from "./CreateSupplier.component";

const Supplier = () => {
  const columnCategory = [
    "street",
    "city",
    "state",
    "country",
    "name",
    "postal",
    "phone",
    "fax",
    "email",
    "website",
  ];
  const [tableCategory, setTableCategory] = useState([
    "street",
    "city",
    "state",
    "country",
    "name",
  ]);
  const [query, setQuery] = useState("");

  return (
    <Box mt="20px">
      <Flex mb="20px">
        <Input
          maxW="200px"
          d="flex"
          justifyContent="start"
          variant={"outline"}
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconButton icon={<IconSearch />} variant="ghost" />
        <Spacer />
        <CustomModal heading="Supplier Details" element={<CreateSupplier />}>
          <Button
            leftIcon={<IconPlus />}
            bg={theme.color.accent}
            color={theme.color.text}
            marginRight="10px"
          >
            Add Supplier
          </Button>
        </CustomModal>
        <CustomPopover
          element={
            <TableColumn
              columnCategory={columnCategory}
              tableCategory={tableCategory}
              setTableCategory={setTableCategory}
            />
          }
        >
          <IconButton bg={theme.color.text} icon={<IconColumns />} />
        </CustomPopover>
      </Flex>
      <Divider />
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              {tableCategory.includes("name") && <Th>Name</Th>}
              {tableCategory.includes("street") && <Th>Address</Th>}
              {tableCategory.includes("city") && <Th>City</Th>}
              {tableCategory.includes("state") && <Th>State</Th>}
              {tableCategory.includes("postalCode") && <Th>Postal</Th>}
              {tableCategory.includes("country") && <Th>Country</Th>}
              {tableCategory.includes("email") && <Th>Email</Th>}
              {tableCategory.includes("phone") && <Th>Phone</Th>}
              {tableCategory.includes("fax") && <Th>Fax</Th>}
              {tableCategory.includes("website") && <Th>Website</Th>}
              <Th width="10px"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {supplier_data.map((item) => (
              <Tr>
                {tableCategory.includes("name") && <Td>{item.name}</Td>}
                {tableCategory.includes("street") && <Td>{item.street}</Td>}
                {tableCategory.includes("city") && <Td>{item.city}</Td>}
                {tableCategory.includes("state") && <Td>{item.state}</Td>}
                {tableCategory.includes("postalCode") && (
                  <Td>{item.postalCode}</Td>
                )}
                {tableCategory.includes("country") && <Td>{item.country}</Td>}
                {tableCategory.includes("email") && <Td>{item.email}</Td>}
                {tableCategory.includes("phone") && <Td>{item.phone}</Td>}
                {tableCategory.includes("fax") && <Td>{item.fax}</Td>}
                {tableCategory.includes("website") && <Td>{item.website}</Td>}
                {tableCategory.length !== 0 && (
                  <Td>
                    <IconDotsVertical />
                  </Td>
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Supplier;
