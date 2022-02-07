import React from "react";
import { Button, Flex, IconButton, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export default function ActionBar() {
    return (
        <Flex justifyContent={"space-between"} py={4}>
            <Button colorScheme={"green"}>New Entry</Button>
            <Flex maxW={"300px"} gap={1}>
                <Input placeholder={"Filter results"} />
                <IconButton aria-label={"Filter"} icon={<SearchIcon />} />
            </Flex>
        </Flex>
    );
}
