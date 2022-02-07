import React from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";

export default function Flights() {
    const columnHeaders = [
        "FlightID",
        "VehicleID",
        "AgencyID",
        "LaunchCountryID",
        "LaunchDate",
        "MaximumAltitude",
        "MissionName",
    ];
    const data = [
        [0, 0, 0, 0, "2021-10-13", 106, "M16"],
        [1, 1, 1, 1, "2020-11-16", 400, "Crew-1"],
    ];

    return (
        <PageWrapper>
            <Heading size={"md"}>Table: Flights</Heading>
            <Text>
                This table is used to record the details of each space flight.
            </Text>
            <ActionBar />
            <DataTable columnHeaders={columnHeaders} data={data} />
        </PageWrapper>
    );
}
