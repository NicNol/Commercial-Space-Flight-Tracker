import React from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable";
import { Heading } from "@chakra-ui/react";

export default function Companies() {
    const columnHeaders = ["CompanyID", "CompanyName", "HeadquartersCountryID"];
    const data = [
        [0, "SpaceX", 0],
        [1, "Blue Origin", 1],
        [2, "Virgin Galactic", 2],
    ];

    return (
        <PageWrapper>
            <Heading textAlign={"center"} size={"md"}>
                Table: Companies
            </Heading>
            <DataTable columnHeaders={columnHeaders} data={data} />
        </PageWrapper>
    );
}
