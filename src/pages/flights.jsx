import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";
import { fetchData, filterResults } from "../../util/commonFunctions";

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
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => fetchData("/api/Flights", handleFetchedData), []);
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
