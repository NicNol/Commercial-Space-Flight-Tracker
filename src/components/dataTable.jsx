import React from "react";
import {
    Flex,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

export default function DataTable({
    columnHeaders,
    data,
    displayActions = true,
}) {
    const actionBlock = (
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
                />
            </Flex>
        </Td>
    );

    return (
        <Table variant={"striped"} color={"black"}>
            <Thead>
                <Tr>
                    {columnHeaders.map((header) => {
                        return <Th key={header}>{header}</Th>;
                    })}
                    {displayActions ? <Th>Actions</Th> : ""}
                </Tr>
            </Thead>
            <Tbody>
                {data.map((row, index) => {
                    return (
                        <Tr key={index}>
                            {row.map((cell) => {
                                return <Td key={index + cell}>{cell}</Td>;
                            })}
                            {displayActions ? actionBlock : ""}
                        </Tr>
                    );
                })}
            </Tbody>
        </Table>
    );
}
