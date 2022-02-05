import React from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable";
import { Heading } from "@chakra-ui/react";

export default function Agencies() {
    const columnHeaders = ["AgencyID", "AgencyName"];
    const data = [
        [0, "Federal Aviation Administration"],
        [1, "European Aviation Safety Agency"],
        [2, "International Civil Aviation Organization"],
    ];

    return (
        <PageWrapper>
            <Heading textAlign={"center"} size={"md"}>
                Table: Agencies
            </Heading>
            <DataTable columnHeaders={columnHeaders} data={data} />
        </PageWrapper>
    );
}
