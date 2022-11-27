import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  CREATE_ONE_DOC,
  DELETE_ONE_DOC,
  DOCS_RESET,
  GET_ALL_DOCS,
  UPDATE_ONE_DOC,
} from "../../redux/feature/docSlice";
import { theme } from "../../styles/globalTheme.style";

const DocumentTextEditor = ({ docData = null, type, onClose }) => {
  const dispatch = useDispatch();
  const { isLoading, isError, isUpdateOneSuccess, message } = useSelector(
    (state) => state.docs
  );
  const [value, setValue] = useState(docData ? docData.body : "");
  const [title, setTitle] = useState(docData ? docData.title : "");
  function handleUpdateDocument() {
    dispatch(
      UPDATE_ONE_DOC({
        data: {
          title: title,
          body: value,
        },
        id: docData?._id,
      })
    );
    dispatch(GET_ALL_DOCS());
    onClose();
  }
  function handleCreateDocument() {
    dispatch(
      CREATE_ONE_DOC({
        title: title,
        body: value,
      })
    );
    dispatch(GET_ALL_DOCS());
    onClose();
  }
  function handleDeleteDocument() {
    dispatch(DELETE_ONE_DOC(docData?._id));
    dispatch(GET_ALL_DOCS());
    onClose();
  }
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isUpdateOneSuccess) {
      toast.success(message);
    }
    dispatch(DOCS_RESET());
  }, []);
  return (
    <Flex flexDir="column" h="100%">
      <InputGroup mb="20px">
        <InputLeftAddon children="Doc Title" />
        <Input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </InputGroup>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <Spacer />
      <Button
        bg={theme.color.accent}
        color={theme.color.text}
        onClick={() => {
          type === "update" ? handleUpdateDocument() : handleCreateDocument();
        }}
        isLoading={isLoading}
      >
        {type === "update" ? "Update" : "Create"}
      </Button>
      {type === "update" && (
        <Accordion w="100%" allowToggle mt="20px">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="center">
                  Danger operation zone
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text color={theme.color.alert} fontWeight="bold" mb="20px">
                WARNING: By performing the following operation current notes
                data will be permanently deleted from the records.
              </Text>
              <Button
                w="100%"
                bg={theme.color.alert}
                color={theme.color.text}
                onClick={handleDeleteDocument}
                isLoading={isLoading}
              >
                I understand
              </Button>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      )}
    </Flex>
  );
};

export default DocumentTextEditor;
