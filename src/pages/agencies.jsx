import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import ActionBar from "../components/actionBar";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";

export default function Agencies() {
    const columnHeaders = ["AgencyID", "AgencyName"];

    const [filterValue, setFilterValue] = useState("");
    const [tableState, setTableState] = useState([]);

    fetch("/api/Agencies")
        .then((response) => response.json())
        .then((data) => setTableState(data));

    useEffect(() => filterResults(filterValue), [filterValue]);

    function filterResults(filterValue) {
        const newTableState = tableState.filter((row) => {
            let output = false;
            row.forEach((cell) =>
                cell.toString().includes(filterValue) ? (output = true) : null
            );
            return output;
        });
        setTableState(newTableState);
    }

    return (
        <PageWrapper>
            <Heading size={"md"}>Table: Agencies</Heading>
            <Text>
                This table records each government agency acting as a launch
                provider using a unique ID so that agency names are consistent
                across the database.
            </Text>
            <ActionBar tableName={"Agencies"} setFilterValue={setFilterValue} />
            <DataTable
                columnHeaders={columnHeaders}
                data={tableState}
                tableName={"Agencies"}
            />
        </PageWrapper>
    );
}
