import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";

export default function AgencyMemberships() {
    const columnHeaders = ["MembershipID", "AgencyID", "CountryID"];

    const [filterValue, setFilterValue] = useState("");
    const [tableState, setTableState] = useState([]);

    fetch("/api/AgencyMemberships")
        .then((response) => response.json())
        .then((data) => setTableState(data));

    useEffect(() => filterResults(filterValue), [filterValue]);

    function filterResults(filterValue) {
        const newTableState = tableState.filter((row) => {
            let output = false;
            row.forEach((cell) =>
                cell.toString().includes(filterValue) ? (output = true) : ""
            );
            return output;
        });
        setTableState(newTableState);
    }

    return (
        <PageWrapper>
            <Heading size={"md"}>Table: AgencyMemberships</Heading>
            <Text>
                This table is used to implement a Many:Many relationship between
                Agencies and Countries.
            </Text>
            <ActionBar
                tableName={"AgencyMemberships"}
                setFilterValue={setFilterValue}
            />
            <DataTable
                columnHeaders={columnHeaders}
                data={tableState}
                tableName={"AgencyMemberships"}
            />
        </PageWrapper>
    );
}
