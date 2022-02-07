import React from "react";
import PageWrapper from "../components/pageWrapper";
import ActionBar from "../components/actionBar";
import DataTable from "../components/dataTable";
import { Heading, Text } from "@chakra-ui/react";

export default function Agencies() {
    const columnHeaders = ["AgencyID", "AgencyName"];
    const data = [
        [0, "Federal Aviation Administration"],
        [1, "European Aviation Safety Agency"],
        [2, "International Civil Aviation Organization"],
    ];

    return (
        <PageWrapper>
            <Heading size={"md"}>Table: Agencies</Heading>
            <Text>
                This table records each government agency acting as a launch
                provider using a unique ID so that agency names are consistent
                across the database.
            </Text>
            <ActionBar />
            <DataTable columnHeaders={columnHeaders} data={data} />
        </PageWrapper>
    );
}
