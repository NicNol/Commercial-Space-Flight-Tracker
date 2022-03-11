import React, { useState } from "react";
import {
    Box,
    Flex,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
} from "@chakra-ui/react";
import tableConstraints from "../../../util/tableConstraints.json";
import DropDown from "./dropDown";
import InputBox from "./inputBox";

export default function DataField({ props }) {
    const {
        tableName,
        index,
        required,
        columnName,
        handleChange,
        cellValue,
        saves,
    } = props;

    const column = tableConstraints[tableName].columns.find(
        (column) => column.columnName === columnName
    );
    const { datatype, foreignKey } = column;

    const [input, setInput] = useState(cellValue);

    const handleInputChange = (e) => {
        setInput(e.target.value);
        handleChange(e, columnName);
    };

    const isError =
        required &&
        ((!input && saves > 0) || input?.toString().trim().length === 0);

    const helperText = <FormHelperText visibility={"hidden"}>.</FormHelperText>;
    const errorMessage = (
        <FormErrorMessage>{columnName} is required.</FormErrorMessage>
    );

    //Determine the appropriate component for the field
    let inputField = (
        <InputBox
            key={tableName + "-input-box-" + index}
            props={{ ...props, handleInputChange }}
            type={datatype === "Date" ? "date" : "text"}
        />
    );
    if (foreignKey)
        inputField = (
            <DropDown
                key={tableName + "-dropdown-" + index}
                props={{ ...props, handleInputChange }}
            />
        );

    return (
        <Box key={tableName + "-modal-" + index}>
            <FormControl isRequired={required} isInvalid={isError}>
                <Flex gap={1}>
                    <FormLabel htmlFor={columnName + "-input"}>
                        {columnName}
                    </FormLabel>
                </Flex>
                {inputField}
                {isError ? errorMessage : helperText}
            </FormControl>
        </Box>
    );
}
