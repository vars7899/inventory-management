import { Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import React from "react";

const CustomPopover = ({ children, element }) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent maxH="60vh" overflowY="scroll">
        <div>{element}</div>
      </PopoverContent>
    </Popover>
  );
};

export default CustomPopover;
