import React from "react";
import { Text, Tr, Td } from "@chakra-ui/react";
import ActionCell from "./actionCell";

export default function DataTableRow({
    data,
    index,
    displayActions,
    tableName,
}) {
    const formattedNull = (
        <Text opacity={".4"} fontStyle={"italic"}>
            NULL
        </Text>
    );

    function formatCell(columnName, input) {
        let output;

        switch (columnName) {
            case "IsAstronaut":
                input ? (output = "Yes") : (output = "No");
                break;
            case "MaximumAltitude":
                output = `${input} km`;
                break;
            case "LaunchDate":
            // fall through to next case
            case "DateOfBirth":
                if (input !== null) {
                    let mm, dd, yyyy;
                    [yyyy, mm, dd] = input.split("T")[0].split("-");
                    if (yyyy === "0000" && mm === "00" && dd === "00") {
                        output = formattedNull; // display NULL if date is set to default value
                    } else {
                        output = `${mm}/${dd}/${yyyy}`;
                    }
                } else {
                    output = formattedNull; // display NULL if date is empty
                }
                break;
            default:
                output = input ? input : formattedNull; // display NULL is field is empty
                break;
        }

        return output;
    }

    const dataValues = Object.entries(data);

    const cells = dataValues.map(([prop, cell], cellIndex) => (
        <Td key={tableName + index.toString() + "x" + cellIndex.toString()}>
            {formatCell(prop, cell)}
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
