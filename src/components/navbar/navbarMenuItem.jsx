import React from "react";
import { Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function NavbarMenuItem({ children, to = "/" }) {
    return (
        <Link
            as={RouterLink}
            to={to}
            transition={".2s"}
            px={4}
            _focus={{ outline: "none" }}
            _hover={{
                textDecoration: "none",
                backgroundSize: "75% 10%",
            }}
            textAlign={"center"}
            backgroundImage={
                "linear-gradient(to right, #0f0c29bb, #302b63bb, #24243ebb)"
            }
            backgroundPosition={"center bottom"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"75% 0%"}
        >
            <Text
                color={"#333333CC"}
                textShadow={"1px 1px 2px rgba(0,0,0,0.2)"}
                fontSize="lg"
                fontWeight={"500"}
            >
                {children}
            </Text>
        </Link>
    );
}
