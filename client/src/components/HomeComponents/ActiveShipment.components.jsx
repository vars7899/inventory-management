import { Box, Divider, Text } from "@chakra-ui/react";
import { Pie } from "@ant-design/plots";
import { theme } from "../../styles/globalTheme.style";

const ActiveShipment = () => {
  const data = [
    {
      type: "Pending",
      value: 27,
    },
    {
      type: "Issued",
      value: 25,
    },
    {
      type: "Delivery",
      value: 18,
    },
    {
      type: "Late",
      value: 15,
    },
    {
      type: "Damaged",
      value: 10,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    legend: {
      layout: "horizontal",
      position: "bottom",
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "1rem",
        },
        content: "Active Shipments",
      },
    },
  };
  return (
    <Box bg={theme.color.accent2} p="25px" borderRadius="10px">
      <Text fontSize="2rem">Total Shipments</Text>
      <Divider m="20px 0px" />
      <Pie {...config} />
    </Box>
  );
};

export default ActiveShipment;
