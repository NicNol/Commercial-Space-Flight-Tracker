import React, { useState } from "react";
import { Flex, IconButton, Td, useDisclosure } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import DataModal from "../dataModal/dataModal";
import DialogBox from "../dialogBox";
import tableConstraints from "../../../util/tableConstraints.json";

export default function ActionCell({ tableName, data }) {
    const [alertOpen, setAlertOpen] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const entityAttributeIDName =
        tableConstraints[tableName]["columns"][0].columnName;
    const attributeID = Object.values(data)[0];

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
                    tableName={tableName}
                    attribute={entityAttributeIDName}
                    entityID={attributeID}
                />
            </Flex>
        </Td>
    );
}
