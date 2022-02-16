import React from "react";
import PageWrapper from "../components/pageWrapper";
import { Button, Flex, Heading, Input, Select } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import * as tableConstraints from "../../util/tableConstraints.json";

export default function Search() {
    const tableNames = Object.keys(tableConstraints).map((table) => {
        if (table === "default") return "";
        return (
            <option key={table} value={table}>
                {table}
            </option>
        );
    });

    const columnNames = [];
    Object.keys(tableConstraints).map((table) => {
        if (table === "default") return "";
        for (const column of tableConstraints[table]["columns"]) {
            const columnName = column.columnName;
            if (!columnNames.includes(columnName)) {
                columnNames.push(columnName);
            }
        }
    });

    const columnOptions = columnNames.map((name) => {
        return (
            <option key={name} value={name}>
                {name}
            </option>
        );
    });

    return (
        <PageWrapper>
            <Heading size={"md"}>Search: All Tables</Heading>
            <Flex w={"100%"} direction={["column", null, "row"]} gap={8} py={4}>
                <Flex direction={"column"} flexGrow={1}>
                    <Heading size={"sm"}>Table Name</Heading>
                    <Select>{tableNames}</Select>
                </Flex>
                <Flex direction={"column"} flexGrow={1}>
                    <Heading size={"sm"}>Column Name</Heading>
                    <Select>{columnOptions}</Select>
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
                    <Input />
                </Flex>
                <Button
                    flexGrow={1}
                    colorScheme={"blue"}
                    rightIcon={<SearchIcon />}
                >
                    Search
                </Button>
            </Flex>
        </PageWrapper>
    );
}
