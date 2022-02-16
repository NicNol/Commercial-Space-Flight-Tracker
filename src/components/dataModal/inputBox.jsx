import React from "react";
import { Input } from "@chakra-ui/react";

export default function InputBox({ props }) {
    const { cellValue, required, readOnly, assigned } = props;
    return (
        <Input
            defaultValue={cellValue}
            isRequired={required}
            isReadOnly={readOnly}
            isDisabled={assigned}
            variant={assigned ? "filled" : "outline"}
        />
    );
}
