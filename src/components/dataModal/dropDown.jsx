import React, { useEffect, useState } from "react";
import { Select } from "@chakra-ui/react";
import { fetchData } from "../../../util/commonFunctions";

export default function FkDropDown({ props }) {
    const [fetchedData, setFetchedData] = useState([]);
    const [input, setInput] = useState(cellValue);

    useEffect(
        () => fetchData(`/api/${foreignKey.tableName}`, handleFetchedData),
        []
    );

    function handleFetchedData(data) {
        setFetchedData(data);
    }

    function handleInputChange(event) {
        handleChange(event, columnName);
        setInput(event.target.value);
    }

    function formatSelectOption(input) {
        let output = `${input[foreignKey.columnName]}: `;

        foreignKey.dropdownColumnNames.forEach((fk) => {
            output = `${output} ${input[fk]}`;
        });

        return output;
    }

    const {
        cellValue,
        required,
        readOnly,
        tableName,
        columnName,
        assigned,
        launchOperator,
        handleChange,
        foreignKey,
    } = props;

    const foreignKeys = fetchedData.map((row, rowIndex) => (
        <option
            key={tableName + columnName + "x" + rowIndex.toString()}
            value={row[foreignKey.columnName]}
        >
            {formatSelectOption(row)}
        </option>
    ));

    function getDisabledStatus() {
        const output =
            tableName === "Flights"
                ? columnName === "AgencyID" &&
                  launchOperator.companyID !== "NULL"
                    ? true
                    : columnName === "CompanyID" &&
                      launchOperator.agencyID !== "NULL"
                    ? true
                    : assigned
                : assigned;
        return output;
    }

    return (
        <Select
            id={columnName + "-input"}
            name={columnName}
            value={input ? input : cellValue}
            isRequired={required}
            isReadOnly={readOnly}
            isDisabled={getDisabledStatus()}
            variant={readOnly ? "filled" : "outline"}
            onChange={(event) => handleInputChange(event)}
        >
            {required ? "" : <option value="NULL">NULL</option>}
            {foreignKeys}
        </Select>
    );
}


export function BoolDropDown({ props }) {
    const {
        cellValue,
        required,
        readOnly,
        columnName,
        assigned,
        input,
        handleInputChange,
    } = props;

    return (
        <Select
            id={columnName + "-input"}
            name={columnName}
            value={input ? input : cellValue}
            isRequired={required}
            isReadOnly={readOnly}
            isDisabled={assigned}
            variant={readOnly ? "filled" : "outline"}
            onChange={handleInputChange}
        >
            <option value={0}>No</option>
            <option value={1}>Yes</option>
        </Select>
    );
}