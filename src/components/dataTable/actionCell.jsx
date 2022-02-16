import React, { useState } from "react";
import { Flex, IconButton, Td, useDisclosure } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import DataModal from "../dataModal/dataModal";
import DialogBox from "../dialogBox";

export default function ActionCell({ tableName, data }) {
    const [alertOpen, setAlertOpen] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Td>
            <Flex gap={2}>
                <IconButton
                    aria-label={"edit"}
                    icon={<EditIcon w={8} h={8} />}
                    colorScheme={"blue"}
                    p={4}
                    onClick={onOpen}
                />
                <IconButton
                    aria-label={"delete"}
                    icon={<DeleteIcon w={8} h={8} />}
                    colorScheme={"red"}
                    p={4}
                    onClick={() => setAlertOpen(true)}
                />
                <DataModal
                    onClose={onClose}
                    isOpen={isOpen}
                    tableName={tableName}
                    data={data}
                />
                <DialogBox
                    isOpen={alertOpen}
                    onClose={() => setAlertOpen(false)}
                />
            </Flex>
        </Td>
    );
}
