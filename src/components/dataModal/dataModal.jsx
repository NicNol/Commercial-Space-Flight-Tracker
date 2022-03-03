import React from "react";
import {
    Button,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
} from "@chakra-ui/react";
import FormField from "./formField";

export default function DataModal({ onClose, isOpen, tableName, data }) {
    const modalHeader = data ? "Edit Entry" : "New Entry";
    const dataValues = Object.values(data);
    const props = {
        onClose: onClose,
        isOpen: isOpen,
        tableName: tableName,
        data: dataValues,
    };

    function handleSave() {
        const formName = `${tableName}Form`;
        const form = document.getElementById(formName);
        form.submit();
    }

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
                        <form
                            id={`${tableName}Form`}
                            action={`/api/${tableName}`}
                            method={"POST"}
                        >
                            {/* <input
                                type={"hidden"}
                                name={"_method"}
                                value={data ? "PUT" : "POST"}
                            ></input> */}
                            <FormField props={props} />
                        </form>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Flex justifyContent={"flex-end"} gap={1}>
                        <Button colorScheme={"green"} onClick={handleSave}>
                            Save
                        </Button>
                        <Button
                            colorScheme={"red"}
                            variant={"outline"}
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
