import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";

export default function Countries() {
    const columnHeaders = ["CountryID", "CountryName"];
    const data = [
        [0, "United States of America"],
        [1, "Russia"],
        [2, "China"],
    ];

    const [filterValue, setFilterValue] = useState("");
    const [tableState, setTableState] = useState(data);

    useEffect(() => filterResults(filterValue), [filterValue]);

    function filterResults(filterValue) {
        const newTableState = data.filter((row) => {
            let output = false;
            row.forEach((cell) =>
                cell.toString().includes(filterValue) ? (output = true) : ""
            );
            return output;
        });
        setTableState(newTableState);
    }

    return (
        <PageWrapper>
            <Heading size={"md"}>Table: Countries</Heading>
            <Text>
                This table records each country using a unique ID so that
                country names are consistent across the database.
            </Text>
            <ActionBar
                tableName={"Countries"}
                setFilterValue={setFilterValue}
            />
            <DataTable
                columnHeaders={columnHeaders}
                data={tableState}
                tableName={"Countries"}
            />
        </PageWrapper>
    );
}
