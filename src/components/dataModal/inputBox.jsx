import React from "react";
import { Input } from "@chakra-ui/react";

export default function InputBox({ props, type }) {
    const { cellValue, required, readOnly, assigned } = props;
    return (
        <Input
            type={type}
            defaultValue={cellValue}
            isRequired={required}
            isReadOnly={readOnly}
            isDisabled={assigned}
            variant={assigned ? "filled" : "outline"}
        />
    );
}
