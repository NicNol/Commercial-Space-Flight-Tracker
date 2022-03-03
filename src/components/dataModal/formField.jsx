import React, { useState } from "react";
import tableConstraints from "../../../util/tableConstraints.json";
import DropDown from "./dropDown";
import DataField from "./dataField";
import InputBox from "./inputBox";

export default function FormField({ props }) {
    const { onClose, isOpen, tableName, data } = props;

    //Initialize starting value of FK dropdown from table data if available
    let AgencyIdVal = "NULL", CompanyIdVal = "NULL";
    if (data.length) {
        const AgencyIdIndex = tableConstraints[tableName].columns.findIndex(col => col.columnName === "AgencyID");
        const CompanyIdIndex = tableConstraints[tableName].columns.findIndex(col => col.columnName === "CompanyID");
        AgencyIdVal = data[AgencyIdIndex] !== null ? data[AgencyIdIndex] : "NULL";
        CompanyIdVal = data[CompanyIdIndex] !== null ? data[CompanyIdIndex] : "NULL";
    };
    const [agencyID, setAgencyID] = useState(AgencyIdVal);
    const [companyID, setCompanyID] = useState(CompanyIdVal);
    const handleChange = (event, columnName) => {
        if (columnName === "AgencyID") {
            setAgencyID(event.target.value);
            setCompanyID("NULL");
        } else if (columnName === "CompanyID") {
            setCompanyID(event.target.value);
            setAgencyID("NULL");
        }
    };
    const handleClose = (event) => {
        setAgencyID("NULL");
        setCompanyID("NULL");
        onClose(event);
    };

    const formData = tableConstraints[tableName].columns.map(
        (column, index) => {
            const {
                columnName,
                required,
                readOnly,
                assigned,
                foreignKey,
                datatype,
            } = column;

            //Determine the value of the field
            let cellValue = "";
            if (data.length > 0) cellValue = data[index];
            else if (assigned) cellValue = "auto-assigned";

            const childrenProps = {
                cellValue: cellValue,
                required: required,
                readOnly: readOnly,
                assigned: data.length > 0 ? false : assigned,  // don't disable input if populated
                foreignKey: foreignKey,
                tableName: tableName,
                columnName: columnName,
                index: index,
                handleChange: handleChange,
                handleClose: handleClose,
                agencyID: agencyID,
                companyID: companyID,
            };

            //Determine the appropriate component for the field
            let inputField = (
                <InputBox
                    key={tableName + "-input-box-" + index}
                    props={childrenProps}
                    type={datatype === "Date" ? "date" : "text"}
                />
            );
            if (foreignKey)
                inputField = (
                    <DropDown
                        key={tableName + "-dropdown-" + index}
                        props={childrenProps}
                    />
                );

            return (
                <DataField
                    key={tableName + "-data-field-" + index}
                    props={childrenProps}
                >
                    {inputField}
                </DataField>
            );
        }
    );

    return <>{formData}</>;
}
