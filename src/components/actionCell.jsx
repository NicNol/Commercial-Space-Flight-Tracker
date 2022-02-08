import React, { useState } from "react";
import { Flex, IconButton, Td } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import DialogBox from "./dialogBox";

export default function ActionCell() {
    const [alertOpen, setAlertOpen] = useState(false);
    return (
        <Td>
            <Flex gap={2}>
                <IconButton
                    aria-label={"edit"}
                    icon={<EditIcon w={8} h={8} />}
                    colorScheme={"blue"}
                    p={4}
                />
                <IconButton
                    aria-label={"delete"}
                    icon={<DeleteIcon w={8} h={8} />}
                    colorScheme={"red"}
                    p={4}
                    onClick={() => setAlertOpen(true)}
                />
                <DialogBox
                    isOpen={alertOpen}
                    onClose={() => setAlertOpen(false)}
                />
            </Flex>
        </Td>
    );
}
