import React from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable";
import { Heading } from "@chakra-ui/react";

export default function Vehicles() {
    const columnHeaders = ["VehicleID", "VehicleName"];
    const data = [
        [0, "Dragon 2"],
        [1, "New Shepard"],
        [2, "Soyuz"],
    ];

    return (
        <PageWrapper>
            <Heading textAlign={"center"} size={"md"}>
                Table: Vehicles
            </Heading>
            <DataTable columnHeaders={columnHeaders} data={data} />
        </PageWrapper>
    );
}
