import React from "react";
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

    return (
        <PageWrapper>
            <Heading size={"md"}>Table: Flight Manifests</Heading>
            <Text>
                This table is used to implement a Many:Many relationship between
                Flights and Participants.
            </Text>
            <ActionBar tableName={"FlightManifests"} />
            <DataTable
                columnHeaders={columnHeaders}
                data={data}
                tableName={"FlightManifests"}
            />
        </PageWrapper>
    );
}
