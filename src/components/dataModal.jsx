import React from "react";
import {
    Box,
    Button,
    Flex,
    Input,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
} from "@chakra-ui/react";
import tableConstraints from "../../util/tableConstraints.json";

export default function DataModal({ onClose, isOpen, tableName, data }) {
    const modalHeader = data ? "Edit Entry" : "New Entry";
    const formData = tableConstraints[tableName].columns.map(
        (column, index) => {
            const { columnName, required, editable, assigned } = column;

            const cellValue = assigned
                ? data
                    ? data[index]
                    : "auto-assigned"
                : data
                ? data[index]
                : "";

            return (
                <Box key={tableName + "-modal-" + index}>
                    <Text>{columnName}</Text>
                    <Input
                        value={cellValue}
                        isRequired={required}
                        isReadOnly={editable}
                        isFullWidth
                        colorScheme={"black"}
                        isDisabled={assigned}
                        variant={assigned ? "filled" : "outline"}
                    />
                </Box>
            );
        }
    );

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            isCentered
            closeOnOverlayClick={false}
            scrollBehavior={"inside"}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{modalHeader}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex flexDirection={"column"} gap={2}>
                        {formData}
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Flex justifyContent={"flex-end"} gap={1}>
                        <Button colorScheme={"green"}>Save</Button>
                        <Button colorScheme={"red"} onClick={onClose}>
                            Cancel
                        </Button>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
