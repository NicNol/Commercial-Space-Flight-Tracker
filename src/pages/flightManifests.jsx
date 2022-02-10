import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";

export default function FlightManifests() {
    const columnHeaders = ["ManifestID", "FlightID", "ParticipantID"];
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
                cell.toString().includes(filterValue) ? (output = true) : ""
            );
            return output;
        });
        setTableState(newTableState);
    }

    return (
        <PageWrapper>
            <Heading size={"md"}>Table: Flight Manifests</Heading>
            <Text>
                This table is used to implement a Many:Many relationship between
                Flights and Participants.
            </Text>
            <ActionBar
                tableName={"FlightManifests"}
                setFilterValue={setFilterValue}
            />
            <DataTable
                columnHeaders={columnHeaders}
                data={tableState}
                tableName={"FlightManifests"}
            />
        </PageWrapper>
    );
}
