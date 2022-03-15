import React from "react";
import tableConstraints from "../../../util/tableConstraints.json";
import DataField from "./dataField";

export default function FormField({ props }) {
    const {
        onClose,
        tableName,
        data,
        launchOperator,
        setLaunchOperator,
        saves,
    } = props;

    const handleChange = (event, columnName) => {
        if (columnName === "AgencyID") {
            setLaunchOperator({
                agencyID: event.target.value,
                companyID: "NULL",
            });
        } else if (columnName === "CompanyID") {
            setLaunchOperator({
                agencyID: "NULL",
                companyID: event.target.value,
            });
        }
    };
    const handleClose = (event) => {
        setLaunchOperator({ agencyID: "NULL", companyID: "NULL" });
        onClose(event);
    };

    const formData = tableConstraints[tableName].columns.map(
        (column, index) => {
            const { columnName, required, readOnly, assigned, foreignKey } =
                column;

            //Determine the value of the field
            let cellValue;
            if (data.length > 0) cellValue = data[index];
            else if (assigned) cellValue = "auto-assigned";

            const childrenProps = {
                cellValue: cellValue,
                required: required,
                readOnly: readOnly,
                assigned: data.length > 0 ? false : assigned, // don't disable input if populated
                foreignKey: foreignKey,
                tableName: tableName,
                columnName: columnName,
                index: index,
                handleChange: handleChange,
                handleClose: handleClose,
                launchOperator: launchOperator,
                saves: saves,
            };

            return (
                <DataField
                    key={tableName + "-data-field-" + index}
                    props={childrenProps}
                />
            );
        }
    );

    return <>{formData}</>;
}
