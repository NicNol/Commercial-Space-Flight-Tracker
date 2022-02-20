import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";
import { fetchData, filterResults } from "../../util/commonFunctions";

export default function Vehicles() {
    const columnHeaders = ["VehicleID", "VehicleName"];

    const [filterValue, setFilterValue] = useState("");
    const [tableState, setTableState] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => fetchData("/api/Vehicles", handleFetchedData), []);
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
