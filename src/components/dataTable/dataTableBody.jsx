import React from "react";
import { Tbody } from "@chakra-ui/react";
import DataTableRow from "./dataTableRow";

export default function DataTableBody({ data, displayActions, tableName }) {
    const rowData = data.map((row, index) => (
        <DataTableRow
            data={row}
            index={index}
            key={index}
            displayActions={displayActions}
            tableName={tableName}
        />
    ));

    return <Tbody>{rowData}</Tbody>;
}
