import React from "react";
import PageWrapper from "../components/pageWrapper";
import DataTable from "../components/dataTable";
import { Heading, Text } from "@chakra-ui/react";
import ActionBar from "../components/actionBar";

export default function AgencyMemberships() {
    const columnHeaders = ["MembershipID", "AgencyID", "CountryID"];
    const data = [
        [0, 0, 0],
        [1, 1, 1],
        [2, 2, 2],
    ];

    return (
        <PageWrapper>
            <Heading size={"md"}>Table: AgencyMemberships</Heading>
            <Text>
                This table is used to implement a Many:Many relationship between
                Agencies and Countries.
            </Text>
            <ActionBar />
            <DataTable columnHeaders={columnHeaders} data={data} />
        </PageWrapper>
    );
}
