import React from "react";
import tableConstraints from "../../../util/tableConstraints.json";
import DropDown from "./dropDown";
import DataField from "./dataField";
import InputBox from "./inputBox";

export default function FormField({ props }) {
    const { onClose, isOpen, tableName, data, launchOperator, setLaunchOperator } = props;

    const handleChange = (event, columnName) => {
        if (columnName === "AgencyID") {
            setLaunchOperator({agencyID: event.target.value, companyID: "NULL"});
        } else if (columnName === "CompanyID") {
            setLaunchOperator({agencyID: "NULL", companyID: event.target.value});
        }
    };
    const handleClose = (event) => {
        setLaunchOperator({agencyID: "NULL", companyID: "NULL"});
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
            let cellValue;
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
                launchOperator: launchOperator
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
