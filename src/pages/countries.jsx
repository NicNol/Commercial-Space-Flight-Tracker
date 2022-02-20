import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";
import { fetchData, filterResults } from "../../util/commonFunctions";

export default function Countries() {
    const columnHeaders = ["CountryID", "CountryName"];

    const [filterValue, setFilterValue] = useState("");
    const [tableState, setTableState] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => fetchData("/api/Countries", handleFetchedData), []);
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
            <Heading size={"md"}>Table: Countries</Heading>
            <Text>
                This table records each country using a unique ID so that
                country names are consistent across the database.
            </Text>
            <ActionBar
                tableName={"Countries"}
                setFilterValue={setFilterValue}
            />
            <DataTable
                columnHeaders={columnHeaders}
                data={tableState}
                tableName={"Countries"}
            />
        </PageWrapper>
    );
}
