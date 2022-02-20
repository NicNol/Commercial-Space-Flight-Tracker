import React from "react";
import { Tr, Td } from "@chakra-ui/react";
import ActionCell from "./actionCell";

export default function DataTableRow({
    data,
    index,
    displayActions,
    tableName,
}) {
    function formatCell(input) {
        let output = input;

        if (typeof input === "boolean") {
            input ? (output = "Yes") : (output = "No");
        }

        return output;
    }

    const dataValues = Object.values(data);
    const cells = dataValues.map((cell, cellIndex) => (
        <Td key={tableName + index.toString() + "x" + cellIndex.toString()}>
            {formatCell(cell)}
        </Td>
    ));

    const actionCell = displayActions ? (
        <ActionCell
            key={tableName + index + "action"}
            tableName={tableName}
            data={data}
        />
    ) : (
        ""
    );

    return (
        <Tr key={index}>
            {cells}
            {actionCell}
        </Tr>
    );
}
