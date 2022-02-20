import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";

export default function Flights() {
    const columnHeaders = [
        "FlightID",
        "VehicleID",
        "AgencyID",
        "CompanyID",
        "LaunchCountryID",
        "LaunchDate",
        "MaximumAltitude",
        "MissionName",
    ];

    const [filterValue, setFilterValue] = useState("");
    const [tableState, setTableState] = useState([]);

    fetch("/api/Flights")
        .then((response) => response.json())
        .then((data) => setTableState(data));

    useEffect(() => filterResults(filterValue), [filterValue]);

    function filterResults(filterValue) {
        const newTableState = tableState.filter((row) => {
            let output = false;
            row.forEach((cell) =>
                cell.toString().includes(filterValue) ? (output = true) : null
            );
            return output;
        });
        setTableState(newTableState);
    }

    return (
        <PageWrapper>
            <Heading size={"md"}>Table: Flights</Heading>
            <Text>
                This table is used to record the details of each space flight.
            </Text>
            <ActionBar tableName={"Flights"} setFilterValue={setFilterValue} />
            <DataTable
                columnHeaders={columnHeaders}
                data={tableState}
                tableName={"Flights"}
            />
        </PageWrapper>
    );
}
