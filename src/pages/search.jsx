import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import { Button, Flex, Heading, Input, Select } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import * as tableConstraints from "../../util/tableConstraints.json";
import { fetchData } from "../../util/commonFunctions";
import DataTable from "../components/dataTable/dataTable";

export default function Search() {
    const [currentTable, setCurrentTable] = useState(
        Object.keys(tableConstraints)[0]
    );
    const [columnOptions, setcolumnOptions] = useState("");
    const [searchResults, setSearchResults] = useState();

    useEffect(() => updateColumnDropdown(currentTable), [currentTable]);

    function getColumnNames(tableName) {
        const columns = tableConstraints[tableName]["columns"];
        return columns.map((column) => column.columnName);
    }

    function updateColumnDropdown(tableName) {
        const columns = tableConstraints[tableName]["columns"];

        const columnOptions = columns.map((column) => {
            const name = column.columnName;
            return (
                <option key={name} value={name}>
                    {name}
                </option>
            );
        });

        setcolumnOptions(columnOptions);
    }

    const tableNames = Object.keys(tableConstraints).map((table) => {
        if (table === "default") return "";
        return (
            <option key={table} value={table}>
                {table}
            </option>
        );
    });

    function handleSearch() {
        const searchCriteria = document.getElementById("seachInput").value;
        const columnName = document.getElementById("columnNameInput").value;

        fetchData(
            `/api/search?tableName=${currentTable}&columnName=${columnName}&searchCriteria=${searchCriteria}`,
            createResultsTable
        );
    }

    function createResultsTable(searchResults) {
        const columnHeaders = getColumnNames(currentTable);
        const resultsTable = (
            <DataTable
                columnHeaders={columnHeaders}
                data={searchResults}
                tableName={currentTable}
                displayActions={false}
            />
        );
        setSearchResults(resultsTable);
    }

    return (
        <PageWrapper>
            <Heading size={"md"}>Search: All Tables</Heading>
            <Flex w={"100%"} direction={["column", null, "row"]} gap={8} py={4}>
                <Flex direction={"column"} flexGrow={1}>
                    <Heading size={"sm"}>Table Name</Heading>
                    <Select
                        onChange={(event) =>
                            setCurrentTable(event.target.value)
                        }
                    >
                        {tableNames}
                    </Select>
                </Flex>
                <Flex direction={"column"} flexGrow={1}>
                    <Heading size={"sm"}>Column Name</Heading>
                    <Select id={"columnNameInput"}>{columnOptions}</Select>
                </Flex>
            </Flex>
            <Flex
                w={"100%"}
                direction={["column", null, "row"]}
                gap={8}
                py={4}
                alignItems={["stretch", null, "flex-end"]}
            >
                <Flex direction={"column"} flexGrow={1}>
                    <Heading size={"sm"}>Search Criteria</Heading>
                    <Input id={"seachInput"} />
                </Flex>
                <Button
                    flexGrow={1}
                    colorScheme={"blue"}
                    leftIcon={<SearchIcon />}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Flex>
            {searchResults}
        </PageWrapper>
    );
}
