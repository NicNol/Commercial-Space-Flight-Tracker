import React from "react";
import { Input } from "@chakra-ui/react";

export default function InputBox({ props, type }) {
    const {
        cellValue,
        required,
        readOnly,
        assigned,
        columnName,
        handleInputChange,
    } = props;

    return (
        <Input
            id={columnName + "-input"}
            name={columnName}
            type={type}
            defaultValue={
                (columnName === "DateOfBirth" || columnName === "LaunchDate") &&
                cellValue
                    ? cellValue.split("T")[0]
                    : cellValue
            }
            isRequired={required}
            required={required}
            isReadOnly={readOnly}
            isDisabled={assigned}
            variant={readOnly ? "filled" : "outline"}
            onChange={handleInputChange}
        />
    );
}
