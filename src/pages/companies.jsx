import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";

export default function Companies() {
    const columnHeaders = ["CompanyID", "CompanyName", "HeadquartersCountryID"];
    const data = [
        [0, "SpaceX", 0],
        [1, "Blue Origin", 1],
        [2, "Virgin Galactic", 2],
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
            <Heading size={"md"}>Table: Companies</Heading>
            <Text>
                This table records each private company acting as a launch
                provider using a unique ID so that company names are consistent
                across the database.
            </Text>
            <ActionBar
                tableName={"Companies"}
                setFilterValue={setFilterValue}
            />
            <DataTable
                columnHeaders={columnHeaders}
                data={tableState}
                tableName={"Companies"}
            />
        </PageWrapper>
    );
}
