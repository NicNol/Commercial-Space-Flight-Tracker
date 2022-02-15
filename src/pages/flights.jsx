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
    const data = [
        [0, 0, 0, 0, 0, "2021-10-13", 106, "M16"],
        [1, 1, 1, 1, 1, "2020-11-16", 400, "Crew-1"],
    ];

    const [filterValue, setFilterValue] = useState("");
    const [tableState, setTableState] = useState(data);

    useEffect(() => filterResults(filterValue), [filterValue]);

    function filterResults(filterValue) {
        const newTableState = data.filter((row) => {
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
