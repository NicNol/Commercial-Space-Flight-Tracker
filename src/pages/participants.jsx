import React from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable";
import { Heading } from "@chakra-ui/react";

export default function Participants() {
    const columnHeaders = ["ParticipantID", "FirstName", "LastName", "IsAstronaut", "DateOfBirth"];
    const data = [
        [0, "Jeffrey", "Ashby", true, "1954-06-16"],
        [1, "Jeff", "Bezos", false, "1964-01-12"],
    ];

    return (
        <PageWrapper>
            <Heading textAlign={"center"} size={"md"}>
                Table: Participants
            </Heading>
            <DataTable columnHeaders={columnHeaders} data={data} />
        </PageWrapper>
    );
}
