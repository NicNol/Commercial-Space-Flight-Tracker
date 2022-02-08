import React from "react";
import { Box, Button, Divider, Flex, Heading, Link } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

export default function Sidebar() {
    function notHome() {
        return window.location.pathname + window.location.search !== "/";
    }

    return (
        <Flex
            h={"100%"}
            w={"200px"}
            maxW={"200px"}
            minW={"200px"}
            display={["none", null, null, "flex"]}
            px={2}
            flexDirection={"column"}
            gap={notHome() ? 4 : 0}
        >
            <Link as={RouterLink} to="/">
                <Button
                    leftIcon={<ArrowLeftIcon />}
                    variant={"ghost"}
                    w={"100%"}
                    display={notHome() ? "block" : "none"}
                >
                    Home
                </Button>
            </Link>
            <Divider display={notHome() ? "block" : "none"} />
            <Box>
                <Heading size={"md"} textDecoration={"underline"}>
                    Manage Tables:
                </Heading>
                <Flex direction={"column"} pl={2} fontWeight={"400"}>
                    <Link as={RouterLink} to="/agencies">
                        Agencies
                    </Link>
                    <Link as={RouterLink} to="/agency-memberships">
                        Agency Memberships
                    </Link>
                    <Link as={RouterLink} to="/citizenships">
                        Citizenships
                    </Link>
                    <Link as={RouterLink} to="/companies">
                        Companies
                    </Link>
                    <Link as={RouterLink} to="/countries">
                        Countries
                    </Link>
                    <Link as={RouterLink} to="/flight-manifests">
                        Flight Manifests
                    </Link>
                    <Link as={RouterLink} to="/flights">
                        Flights
                    </Link>
                    <Link as={RouterLink} to="/participants">
                        Participants
                    </Link>
                    <Link as={RouterLink} to="/vehicles">
                        Vehicles
                    </Link>
                </Flex>
            </Box>
        </Flex>
    );
}
