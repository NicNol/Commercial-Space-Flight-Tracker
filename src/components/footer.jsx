import React from "react";
import { Center, Link, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Center
            className="footer"
            w={"100%"}
            px={8}
            py={16}
            bg={"#eee"}
            color={"#666"}
        >
            <Text>
                Commercial Space Flight Tracker is a project developed by{" "}
                <Link
                    href="https://github.com/NicNol"
                    textDecoration={"underline"}
                >
                    Nic Nolan
                </Link>{" "}
                and{" "}
                <Link
                    href="https://github.com/jlthompso"
                    textDecoration={"underline"}
                >
                    Joe Thompson
                </Link>
                . See the source code on{" "}
                <Link
                    href="https://github.com/NicNol/Commercial-Space-Flight-Tracker"
                    textDecoration={"underline"}
                >
                    GitHub
                </Link>
                .
            </Text>
        </Center>
    );
}
