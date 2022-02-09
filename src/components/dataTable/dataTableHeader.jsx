import React from "react";
import { Thead, Tr, Th } from "@chakra-ui/react";

export default function DataTableHeader({ columnHeaders, displayActions }) {
    return (
        <Thead>
            <Tr>
                {columnHeaders.map((header) => {
                    return <Th key={header}>{header}</Th>;
                })}
                {displayActions ? <Th>Actions</Th> : ""}
            </Tr>
        </Thead>
    );
}
