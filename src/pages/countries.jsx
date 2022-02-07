import React from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";

export default function Countries() {
    const columnHeaders = ["CountryID", "CountryName"];
    const data = [
        [0, "United States of America"],
        [1, "Russia"],
        [2, "China"],
    ];

    return (
        <PageWrapper>
            <Heading size={"md"}>Table: Countries</Heading>
            <Text>
                This table records each country using a unique ID so that
                country names are consistent across the database.
            </Text>
            <ActionBar />
            <DataTable columnHeaders={columnHeaders} data={data} />
        </PageWrapper>
    );
}
