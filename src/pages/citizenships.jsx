import React from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable";
import { Heading } from "@chakra-ui/react";

export default function Citizenships() {
    const columnHeaders = ["CitizenshipID", "ParticipantID", "CountryID"];
    const data = [
        [0, 0, 0],
        [1, 1, 1],
        [2, 2, 2],
    ];

    return (
        <PageWrapper>
            <Heading textAlign={"center"} size={"md"}>
                Table: Citizenships
            </Heading>
            <DataTable columnHeaders={columnHeaders} data={data} />
        </PageWrapper>
    );
}
