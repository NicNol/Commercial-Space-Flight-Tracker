import React from "react";
import { Box, Table } from "@chakra-ui/react";
import DataTableHeader from "./dataTableHeader";
import DataTableBody from "./dataTableBody";

export default function DataTable({
    columnHeaders,
    data,
    displayActions = true,
    tableName,
}) {
    return (
        <Box overflowX={"auto"}>
            <Table variant={"striped"} color={"black"} w={"100%"}>
                <DataTableHeader
                    columnHeaders={columnHeaders}
                    displayActions={displayActions}
                />
                <DataTableBody
                    data={data}
                    displayActions={displayActions}
                    tableName={tableName}
                />
            </Table>
        </Box>
    );
}
