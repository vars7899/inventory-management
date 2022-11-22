import { Toast, useToast } from "@chakra-ui/react";
import React from "react";

const CustomToast = ({ given_type, given_text }) => {
  const toast = useToast();
  return (
    <>
      {toast({
        title: given_text,
        description: given_desc,
        isClosable: true,
        duration: 9000,
        status: given_type,
      })}
    </>
  );
};

export default CustomToast;
