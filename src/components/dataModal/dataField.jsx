import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function DataField({ children, props }) {
    const { tableName, index, required, columnName } = props;

    return (
        <Box key={tableName + "-modal-" + index}>
            <Flex gap={1}>
                {required ? <Text color={"red"}>*</Text> : ""}
                <Text>{columnName}</Text>
            </Flex>
            {children}
        </Box>
    );
}