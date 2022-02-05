import React from "react";
import { Flex, useBoolean } from "@chakra-ui/react";
import NavbarMenuToggle from "./navbarMenuToggle";
import NavbarMenuLinks from "./navbarMenuLinks";

export default function Navbar() {
    const [isOpen, setIsOpen] = useBoolean(false);

    return (
        <Flex
            justifyContent={"flex-start"}
            flexDirection={"column"}
            w={"100%"}
            mb={4}
            display={["block", null, null, "none"]}
        >
            <Flex justifyContent={"center"}>
                <Flex
                    as={"nav"}
                    align={"center"}
                    justify={"space-between"}
                    wrap={"wrap"}
                    w={"100%"}
                    minH={14}
                >
                    <NavbarMenuToggle
                        toggle={setIsOpen.toggle}
                        isOpen={isOpen}
                    />
                    <NavbarMenuLinks isOpen={isOpen} />
                </Flex>
            </Flex>
        </Flex>
    );
}
