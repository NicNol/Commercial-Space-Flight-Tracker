import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import ActionBar from "../components/actionBar";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import { fetchData, filterResults } from "../../util/commonFunctions";

export default function Agencies() {
    const columnHeaders = ["AgencyID", "AgencyName"];

    const [filterValue, setFilterValue] = useState("");
    const [tableState, setTableState] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => fetchData("/api/Agencies", handleFetchedData), []);
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
            <Heading size={"md"}>Table: Agencies</Heading>
            <Text>
                This table records each government agency acting as a launch
                provider using a unique ID so that agency names are consistent
                across the database.
            </Text>
            <ActionBar tableName={"Agencies"} setFilterValue={setFilterValue} />
            <DataTable
                columnHeaders={columnHeaders}
                data={tableState}
                tableName={"Agencies"}
            />
        </PageWrapper>
    );
}
