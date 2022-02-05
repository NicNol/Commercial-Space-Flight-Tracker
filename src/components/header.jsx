import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Navbar from "./navbar/navbar";

export default function Header() {
    return (
        <Flex className="navbar" rowGap={4} direction={"column"}>
            <Box className="navbar-header" textAlign={"center"}>
                <Heading
                    size={"xl"}
                    fontWeight={"500"}
                    color={"transparent"}
                    background={"#302b63"}
                    backgroundClip={"text"}
                    textShadow={"0px 3px 3px rgba(255, 255, 255, 0.5)"}
                    overflow={"visible"}
                    lineHeight={"1.5"}
                >
                    Commercial Space Flight Tracker
                </Heading>
            </Box>
            <Navbar />
        </Flex>
    );
}
