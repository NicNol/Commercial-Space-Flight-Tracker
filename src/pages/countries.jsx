import React from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable";
import { Heading } from "@chakra-ui/react";

export default function Countries() {
    const columnHeaders = ["CountryID", "CountryName"];
    const data = [
        [0, "United States of America"],
        [1, "Russia"],
        [2, "China"],
    ];

    return (
        <PageWrapper>
            <Heading textAlign={"center"} size={"md"}>
                Table: Countries
            </Heading>
            <DataTable columnHeaders={columnHeaders} data={data} />
        </PageWrapper>
    );
}
