import React, { useEffect, useState } from "react";
import { Select } from "@chakra-ui/react";
import { fetchData } from "../../../util/commonFunctions";

export default function DropDown({ props }) {
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => fetchData(`/api/${foreignKey.tableName}`, handleFetchedData), []);

    function handleFetchedData(data) {
        setFetchedData(data);
    }

    function formatSelectOption(input) {
        let output = `${input[foreignKey.columnName]}: `;

        foreignKey.dropdownColumnNames.forEach(fk => {
            output = `${output} ${input[fk]}`
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
        companyID,
        agencyID,
        handleChange,
        foreignKey
    } = props;

    const foreignKeys = fetchedData.map(row => (
        <option value={row[foreignKey.columnName]}>{formatSelectOption(row)}</option>
    ));

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
            defaultValue={Number(cellValue)}
            isRequired={required}
            isReadOnly={readOnly}
            isDisabled={getDisabledStatus()}
            variant={assigned ? "filled" : "outline"}
            onChange={(event) => handleChange(event, columnName)}
        >
            {required ? "" : <option value="NULL">NULL</option>}
            {foreignKeys}
        </Select>
    );
}
