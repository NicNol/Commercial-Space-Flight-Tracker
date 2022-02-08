import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Flex } from "@chakra-ui/react";
import ActionCell from "./actionCell";

export default function DataTable({
    columnHeaders,
    data,
    displayActions = true,
}) {
    return (
        <Box overflowX={"auto"}>
            <Table variant={"striped"} color={"black"} w={"100%"}>
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
                                    if (typeof cell === "boolean") {
                                        cell ? (cell = "Yes") : (cell = "No");
                                    }
                                    return <Td key={index + cell}>{cell}</Td>;
                                })}
                                {displayActions ? <ActionCell /> : ""}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
        </Box>
    );
}
