import React from "react";
import { Stack, Collapse, Flex } from "@chakra-ui/react";
import NavbarMenuItem from "./navbarMenuItem";

export default function NavbarMenuLinks({ isOpen }) {
    return (
        <Flex flexBasis={"100%"} bg={"#eee"} justifyContent={"center"}>
            <Collapse in={isOpen}>
                <Stack
                    justify={"center"}
                    direction={"column"}
                    px={4}
                    py={3}
                    align={"center"}
                >
                    <NavbarMenuItem to={"/"}>Home</NavbarMenuItem>
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
                </Stack>
            </Collapse>
        </Flex>
    );
}
