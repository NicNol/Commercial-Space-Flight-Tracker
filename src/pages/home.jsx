import React from "react";
import PageWrapper from "../components/pageWrapper";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
    return (
        <PageWrapper>
            <Box w={"100%"} px={4}>
                <Heading size={"md"}>Home Page</Heading>
                <Text>
                    Welcome! This is the backend for the Commercial Space Flight
                    Tracker database. This page is intended for administrators
                    of this fictional website and allows access to change
                    entries in a real mySQL database using a custom-built GUI.
                </Text>
            </Box>
        </PageWrapper>
    );
}
