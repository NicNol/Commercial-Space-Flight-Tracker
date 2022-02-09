import React from "react";
import {
    Button,
    Flex,
    IconButton,
    Input,
    useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import DataModal from "./dataModal";

export default function ActionBar({ tableName }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex justifyContent={"space-between"} py={4}>
            <Button colorScheme={"green"} onClick={onOpen}>
                New Entry
            </Button>
            <DataModal
                onClose={onClose}
                isOpen={isOpen}
                tableName={tableName}
                data={false}
            />
            <Flex maxW={"300px"} gap={1}>
                <Input placeholder={"Filter results"} />
                <IconButton aria-label={"Filter"} icon={<SearchIcon />} />
            </Flex>
        </Flex>
    );
}
