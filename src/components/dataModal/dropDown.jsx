import React from "react";
import { Select } from "@chakra-ui/react";

export default function DropDown({ props }) {
    const {
        cellValue,
        required,
        readOnly,
        tableName,
        columnName,
        assigned,
        companyID,
        agencyID,
        handleChange,
    } = props;

    function getDisabledStatus() {
        const output =
            tableName === "Flights"
                ? columnName === "AgencyID" && companyID !== "NULL"
                    ? true
                    : columnName === "CompanyID" && agencyID !== "NULL"
                    ? true
                    : assigned
                : assigned;
        return output;
    }

    return (
        <Select
            defaultValue={cellValue}
            isRequired={required}
            isReadOnly={readOnly}
            isDisabled={getDisabledStatus()}
            variant={assigned ? "filled" : "outline"}
            onChange={(event) => handleChange(event, columnName)}
        >
            {required ? "" : <option value="NULL">NULL</option>}
            <option value="Foreign Key Id1">FK Option 1</option>
            <option value="Foreign Key Id2">FK Option 2</option>
            <option value="Foreign Key Id3">FK Option 3</option>
        </Select>
    );
}
