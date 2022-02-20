import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";

export default function Vehicles() {
    const columnHeaders = ["VehicleID", "VehicleName"];

    const [filterValue, setFilterValue] = useState("");
    const [tableState, setTableState] = useState([]);

    fetch("/api/Vehicles")
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
            <Heading size={"md"}>Table: Vehicles</Heading>
            <Text>
                This table is used to record the details of each launch vehicle
                family using a unique ID so that vehicle names are consistent
                across the database.
            </Text>
            <ActionBar tableName={"Vehicles"} setFilterValue={setFilterValue} />
            <DataTable
                columnHeaders={columnHeaders}
                data={tableState}
                tableName={"Vehicles"}
            />
        </PageWrapper>
    );
}
