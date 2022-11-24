import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const CustomModal = ({ children, element, heading, size = "sm" }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Send onClose to the children
  const elementWithExtraProp = React.Children.map(element, (child) =>
    React.cloneElement(child, { onClose: onClose })
  );

  return (
    <>
      {children && <Box onClick={() => onOpen()}>{children}</Box>}
      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{heading}</DrawerHeader>
          <Divider />
          <DrawerBody>{elementWithExtraProp}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CustomModal;
