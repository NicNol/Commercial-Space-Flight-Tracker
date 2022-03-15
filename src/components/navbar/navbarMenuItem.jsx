import React from "react";
import { Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function NavbarMenuItem({ children, to = "/" }) {
    return (
        <Link as={RouterLink} to={to} _focus={{ outline: "none" }}>
            <Text color={"#333333CC"} pl={2} fontWeight={"400"}>
                {children}
            </Text>
        </Link>
    );
}
