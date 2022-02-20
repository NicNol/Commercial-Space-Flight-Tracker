import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";

export default function Participants() {
    const columnHeaders = [
        "ParticipantID",
        "FirstName",
        "LastName",
        "IsAstronaut",
        "DateOfBirth",
    ];

    const [filterValue, setFilterValue] = useState("");
    const [tableState, setTableState] = useState([]);

    fetch("/api/Participants")
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
            <Heading size={"md"}>Table: Participants</Heading>
            <Text>
                This table is used to record the personal details of
                participants in space flights.
            </Text>
            <ActionBar
                tableName={"Participants"}
                setFilterValue={setFilterValue}
            />
            <DataTable
                columnHeaders={columnHeaders}
                data={tableState}
                tableName={"Participants"}
            />
        </PageWrapper>
    );
}
