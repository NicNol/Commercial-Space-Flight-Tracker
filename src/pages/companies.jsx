import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";

export default function Companies() {
    const columnHeaders = ["CompanyID", "CompanyName", "HeadquartersCountryID"];

    const [filterValue, setFilterValue] = useState("");
    const [tableState, setTableState] = useState([]);

    fetch("/api/Companies")
        .then((response) => response.json())
        .then((data) => setTableState(data));

    useEffect(() => filterResults(filterValue), [filterValue]);

    function filterResults(filterValue) {
        const newTableState = tableState.filter((row) => {
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
