import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";
import { fetchData, filterResults } from "../../util/commonFunctions";

export default function Citizenships() {
    const columnHeaders = ["CitizenshipID", "ParticipantID", "CountryID"];

    const [filterValue, setFilterValue] = useState("");
    const [tableState, setTableState] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => fetchData("/api/Citizenships", handleFetchedData), []);
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
            <Heading size={"md"}>Table: Citizenships</Heading>
            <Text>
                This table is used to implement a Many:Many relationship between
                Participants and Countries to maintain information on each
                participant&apos;s known citizenships.
            </Text>
            <ActionBar
                tableName={"Citizenships"}
                setFilterValue={setFilterValue}
            />
            <DataTable
                columnHeaders={columnHeaders}
                data={tableState}
                tableName={"Citizenships"}
            />
        </PageWrapper>
    );
}
