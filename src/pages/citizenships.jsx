import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";

export default function Citizenships() {
    const columnHeaders = ["CitizenshipID", "ParticipantID", "CountryID"];
    const data = [
        [0, 0, 0],
        [1, 1, 1],
        [2, 2, 2],
    ];

    const [filterValue, setFilterValue] = useState("");
    const [tableState, setTableState] = useState(data);

    useEffect(() => filterResults(filterValue), [filterValue]);

    function filterResults(filterValue) {
        const newTableState = data.filter((row) => {
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
            <Heading size={"md"}>Table: Citizenships</Heading>
            <Text>
                This table is used to implement a Many:Many relationship between
                Participants and Countries to maintain information on each
                participant&apos;s known citizenships.
            </Text>
            <ActionBar
                tableName={"Citizenships"}
                setFilterValue={setFilterValue}
            />
            <DataTable
                columnHeaders={columnHeaders}
                data={tableState}
                tableName={"Citizenships"}
            />
        </PageWrapper>
    );
}
