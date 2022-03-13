import React from "react";
import {
    Button,
    Divider,
    Stack,
    Collapse,
    Flex,
    Heading,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import NavbarMenuItem from "./navbarMenuItem";

export default function NavbarMenuLinks({ isOpen }) {
    function notHome() {
        return window.location.pathname + window.location.search !== "/";
    }

    return (
        <Flex flexBasis={"100%"}>
            <Collapse in={isOpen}>
                <Stack direction={"column"} px={4} py={3}>
                    <NavbarMenuItem to={"/"}>
                        <Button
                            leftIcon={<ArrowLeftIcon />}
                            variant={"ghost"}
                            w={"100%"}
                            visibility={notHome() ? "visible" : "hidden"}
                        >
                            Home
                        </Button>
                    </NavbarMenuItem>
                    <Divider visibility={notHome() ? "visible" : "hidden"} />
                    <Heading size={"md"} textDecoration={"underline"}>
                        Manage Tables:
                    </Heading>
                    <NavbarMenuItem to={"/agencies"}>Agencies</NavbarMenuItem>
                    <NavbarMenuItem to={"/agency-memberships"}>
                        Agency Memberships
                    </NavbarMenuItem>
                    <NavbarMenuItem to={"/citizenships"}>
                        Citizenships
                    </NavbarMenuItem>
                    <NavbarMenuItem to={"/companies"}>Companies</NavbarMenuItem>
                    <NavbarMenuItem to={"/countries"}>Countries</NavbarMenuItem>
                    <NavbarMenuItem to={"/flight-manifests"}>
                        Flight Manifests
                    </NavbarMenuItem>
                    <NavbarMenuItem to={"/flights"}>Flights</NavbarMenuItem>
                    <NavbarMenuItem to={"/participants"}>
                        Participants
                    </NavbarMenuItem>
                    <NavbarMenuItem to={"/vehicles"}>Vehicles</NavbarMenuItem>
                    <Heading size={"md"} textDecoration={"underline"}>
                        Search Tables:
                    </Heading>
                    <NavbarMenuItem to={"/search"}>
                        Global Search
                    </NavbarMenuItem>
                </Stack>
            </Collapse>
        </Flex>
    );
}
