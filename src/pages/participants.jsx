import React from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";

export default function Participants() {
    const columnHeaders = [
        "ParticipantID",
        "FirstName",
        "LastName",
        "IsAstronaut",
        "DateOfBirth",
    ];
    const data = [
        [0, "Jeffrey", "Ashby", true, "1954-06-16"],
        [1, "Jeff", "Bezos", false, "1964-01-12"],
    ];

    return (
        <PageWrapper>
            <Heading size={"md"}>Table: Participants</Heading>
            <Text>
                This table is used to record the personal details of
                participants in space flights.
            </Text>
            <ActionBar tableName={"Participants"} />
            <DataTable
                columnHeaders={columnHeaders}
                data={data}
                tableName={"Participants"}
            />
        </PageWrapper>
    );
}
