import React from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";

export default function Vehicles() {
    const columnHeaders = ["VehicleID", "VehicleName"];
    const data = [
        [0, "Dragon 2"],
        [1, "New Shepard"],
        [2, "Soyuz"],
    ];

    return (
        <PageWrapper>
            <Heading size={"md"}>Table: Vehicles</Heading>
            <Text>
                This table is used to record the details of each launch vehicle
                family using a unique ID so that vehicle names are consistent
                across the database.
            </Text>
            <ActionBar />
            <DataTable columnHeaders={columnHeaders} data={data} />
        </PageWrapper>
    );
}
