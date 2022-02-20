import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";
import { fetchData, filterResults } from "../../util/commonFunctions";

export default function Participants() {
    const columnHeaders = [
        "ParticipantID",
        "FirstName",
        "LastName",
        "IsAstronaut",
        "DateOfBirth",
    ];

    const [filterValue, setFilterValue] = useState("");
    const [tableState, setTableState] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => fetchData("/api/Participants", handleFetchedData), []);
    useEffect(
        () => filterResults(filterValue, fetchedData, setTableState),
        [filterValue]
    );

    function handleFetchedData(data) {
        setFetchedData(data);
        setTableState(data);
    }

    return (
        <PageWrapper>
            <Heading size={"md"}>Table: Participants</Heading>
            <Text>
                This table is used to record the personal details of
                participants in space flights.
            </Text>
            <ActionBar
                tableName={"Participants"}
                setFilterValue={setFilterValue}
            />
            <DataTable
                columnHeaders={columnHeaders}
                data={tableState}
                tableName={"Participants"}
            />
        </PageWrapper>
    );
}
