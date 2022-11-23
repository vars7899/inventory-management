<TableContainer>
  <Table variant="striped">
    <Thead>
      <Tr>
        {tableCategory.map(
          (category, index) =>
            category !== "clientName" && (
              <Th key={`category-${index}`}>{category}</Th>
            )
        )}
        <Th width="10px"></Th>
      </Tr>
    </Thead>
    <Tbody>
      {given_data.map((item, index) => (
        <Tr key={`custom-table-${index}`}>
          {/* convert the object to array */}
          {Object.entries(item).map(
            (obj, index) =>
              tableCategory.includes(obj[0]) &&
              obj[0] !== "clientName" && (
                <Td key={`table-column-${index}`}>{obj[1]}</Td>
              )
          )}
          {/* Dimag++, find the id and navigate to that page */}
          {/* {console.log(
        Object.entries(item).find((pair) => pair[0] === "_id")[1]
      )} */}
          {tableCategory.length !== 0 && (
            <Td>
              <IconButton
                icon={<IconDotsVertical />}
                onClick={() => {
                  navigate(
                    `${current}/${
                      Object.entries(item).find((pair) => pair[0] === "_id")[1]
                    }`
                  );
                }}
              />
            </Td>
          )}
        </Tr>
      ))}
    </Tbody>
  </Table>
</TableContainer>;
