import {
  Box,
  Flex,
  IconButton,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Input,
  Container,
  Grid,
  background,
} from "@chakra-ui/react";
import { IconColumns, IconDotsVertical, IconSearch } from "@tabler/icons";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { theme } from "../../styles/globalTheme.style";
import CustomPopover from "../CustomPopover/CustomPopover.components";
import CustomTableColumnSetting from "./CustomTableColumnSetting.component";

const CustomTable = ({ given_data }) => {
  const navigate = useNavigate();
  const current = useLocation().pathname;
  // Extract the header for tables
  const headingList = Object.keys(given_data[0]);
  // by default set the first five element as head
  const [tableCategory, setTableCategory] = useState(() =>
    headingList.slice(1, 9)
  );
  return (
    <Box mt="10px">
      <Flex mb="10px">
        <Input
          type="text"
          placeholder="Search for Keywords"
          w={{ base: "300px" }}
        />
        <Spacer />
        <CustomPopover
          element={
            <CustomTableColumnSetting
              allHeading={headingList}
              selectedHeading={tableCategory}
              setTableCategory={setTableCategory}
            />
          }
        >
          <IconButton bg={theme.color.text} icon={<IconColumns />} />
        </CustomPopover>
      </Flex>
      <Grid maxWidth="100%">
        <Box width="100%" overflowX="scroll">
          <TableContainer minH="650px">
            <Table variant="striped" mb="10px">
              <Thead>
                <Tr>
                  <Th width="10px">Action</Th>
                  {tableCategory.map(
                    (category, index) =>
                      category !== "clientName" && (
                        <Th key={`category-${index}`}>{category}</Th>
                      )
                  )}
                </Tr>
              </Thead>
              <Tbody>
                {given_data.map((item, index) => (
                  <Tr key={`custom-table-${index}`}>
                    {/* Dimag++, find the id and navigate to that page */}
                    {tableCategory.length !== 0 && (
                      <Td>
                        <IconButton
                          icon={<IconDotsVertical />}
                          onClick={() => {
                            navigate(
                              `${current}/${
                                Object.entries(item).find(
                                  (pair) => pair[0] === "_id"
                                )[1]
                              }`
                            );
                          }}
                          variant="ghost"
                          _hover={{ background: theme.color.accent }}
                        />
                      </Td>
                    )}
                    {/* convert the object to array */}
                    {Object.entries(item).map(
                      (obj, index) =>
                        tableCategory.includes(obj[0]) &&
                        obj[0] !== "clientName" && (
                          <Td key={`table-column-${index}`}>{obj[1]}</Td>
                        )
                    )}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </Box>
  );
};

export default CustomTable;
