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
    Select,
    Text,
} from "@chakra-ui/react";
import tableConstraints from "../../util/tableConstraints.json";

export default function DataModal({ onClose, isOpen, tableName, data }) {
    const modalHeader = data ? "Edit Entry" : "New Entry";
    const formData = tableConstraints[tableName].columns.map(
        (column, index) => {
            const { columnName, required, readOnly, assigned, foreignKey } =
                column;

            const cellValue = assigned
                ? data
                    ? data[index]
                    : "auto-assigned"
                : data
                ? data[index]
                : "";

            const inputBox = (
                <Input
                    defaultValue={cellValue}
                    isRequired={required}
                    isReadOnly={readOnly}
                    isDisabled={assigned}
                    variant={assigned ? "filled" : "outline"}
                />
            );

            const dropDown = (
                <Select
                    defaultValue={cellValue}
                    isRequired={required}
                    isReadOnly={readOnly}
                    isDisabled={assigned}
                    variant={assigned ? "filled" : "outline"}
                >
                    {tableName === "Flights" && (columnName === "AgencyID" || columnName === "CompanyID")
                        ? <option value="NULL">NULL</option>
                        : ""}
                    <option value="Foreign Key Id1">FK Option 1</option>
                    <option value="Foreign Key Id2">FK Option 2</option>
                    <option value="Foreign Key Id3">FK Option 3</option>
                </Select>
            );

            return (
                <Box key={tableName + "-modal-" + index}>
                    <Flex gap={1}>
                        {required ? <Text color={"red"}>*</Text> : ""}
                        <Text>{columnName}</Text>
                    </Flex>
                    {foreignKey ? dropDown : inputBox}
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
                    <Flex gap={1} mb={4}>
                        <Text color={"red"}>*</Text>
                        <Text>Indicates a required field</Text>
                    </Flex>
                    <Flex flexDirection={"column"} gap={2}>
                        {formData}
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Flex justifyContent={"flex-end"} gap={1}>
                        <Button colorScheme={"green"} onClick={onClose}>
                            Save
                        </Button>
                        <Button colorScheme={"red"} onClick={onClose}>
                            Cancel
                        </Button>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
