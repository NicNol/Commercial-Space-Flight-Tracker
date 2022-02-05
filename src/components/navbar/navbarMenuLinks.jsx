import React from "react";
import { Stack, Collapse, Flex } from "@chakra-ui/react";
import MenuItem from "./NavbarMenuItem";

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
                    <MenuItem to={"/"}>Home</MenuItem>
                    <MenuItem to={"/agencies"}>Agencies</MenuItem>
                    <MenuItem to={"/agency-memberships"}>
                        Agency Memberships
                    </MenuItem>
                    <MenuItem to={"/citizenships"}>Citizenships</MenuItem>
                    <MenuItem to={"/companies"}>Companies</MenuItem>
                    <MenuItem to={"/countries"}>Countries</MenuItem>
                    <MenuItem to={"/flight-manifests"}>
                        Flight Manifests
                    </MenuItem>
                    <MenuItem to={"/flights"}>Flights</MenuItem>
                    <MenuItem to={"/participants"}>Participants</MenuItem>
                    <MenuItem to={"/vehicles"}>Vehicles</MenuItem>
                </Stack>
            </Collapse>
        </Flex>
    );
}
