import React from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";

export default function Companies() {
    const columnHeaders = ["CompanyID", "CompanyName", "HeadquartersCountryID"];
    const data = [
        [0, "SpaceX", 0],
        [1, "Blue Origin", 1],
        [2, "Virgin Galactic", 2],
    ];

    return (
        <PageWrapper>
            <Heading size={"md"}>Table: Companies</Heading>
            <Text>
                This table records each private company acting as a launch
                provider using a unique ID so that company names are consistent
                across the database.
            </Text>
            <ActionBar tableName={"Companies"} />
            <DataTable
                columnHeaders={columnHeaders}
                data={data}
                tableName={"Companies"}
            />
        </PageWrapper>
    );
}
