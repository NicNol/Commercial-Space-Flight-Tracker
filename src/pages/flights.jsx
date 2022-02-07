import React from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable";
import { Heading } from "@chakra-ui/react";

export default function Flights() {
    const columnHeaders = ["FlightID",
                           "VehicleID",
                           "AgencyID",
                           "LaunchCountryID",
                           "LaunchDate",
                           "MaximumAltitude",
                           "MissionName"];
    const data = [
        [0, 0, 0, 0, "2021-10-13", 106, "M16"],
        [1, 1, 1, 1, "2020-11-16", 400, "Crew-1"],
    ];

    return (
        <PageWrapper>
            <Heading textAlign={"center"} size={"md"}>
                Table: Flights
            </Heading>
            <DataTable columnHeaders={columnHeaders} data={data} />
        </PageWrapper>
    );
}
