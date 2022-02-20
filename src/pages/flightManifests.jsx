import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";
import { fetchData, filterResults } from "../../util/commonFunctions";

export default function FlightManifests() {
    const columnHeaders = ["ManifestID", "FlightID", "ParticipantID"];

    const [filterValue, setFilterValue] = useState("");
    const [tableState, setTableState] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => fetchData("/api/FlightManifests", handleFetchedData), []);
    useEffect(
        () => filterResults(filterValue, fetchedData, setTableState),
        [filterValue]
    );

    function handleFetchedData(data) {
        setFetchedData(data);
        setTableState(data);
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
