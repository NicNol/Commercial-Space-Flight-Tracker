import React from "react";
import { Flex, useBoolean } from "@chakra-ui/react";
import NavbarMenuToggle from "./navbarMenuToggle";
import NavbarMenuLinks from "./navbarMenuLinks";

export default function Navbar() {
    const [isOpen, setIsOpen] = useBoolean(false);

    return (
        <Flex
            flexDirection={"column"}
            w={"100%"}
            display={["block", null, null, "none"]}
        >
            <Flex>
                <Flex
                    as={"nav"}
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
