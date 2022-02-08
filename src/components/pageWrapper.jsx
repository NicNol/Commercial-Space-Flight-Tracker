import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Box, Center, Flex } from "@chakra-ui/react";
import Sidebar from "./sidebar";

export default function PageWrapper({ children }) {
    return (
        <Center
            bg={"linear-gradient(to right, #0f0c29, #302b63, #24243e)"}
            w={"100%"}
            h={"100%"}
        >
            <Flex
                justifyContent={"space-between"}
                flexDirection={"column"}
                minH={"100vh"}
                w={"100%"}
                maxW={"1200px"}
                bg={"white"}
                shadow={"2xl"}
            >
                <Header />
                <Flex
                    flexGrow={1}
                    flexDirection={"column"}
                    justifyContent={"flex-start"}
                    alignSelf={"center"}
                    w={"100%"}
                >
                    <Box w={"100%"}>
                        <Flex w={"100%"} py={8}>
                            <Flex px={4} w={"100%"}>
                                <Sidebar />
                                <Box w={"100%"} overflow={"hidden"}>
                                    {children}
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
                <Footer />
            </Flex>
        </Center>
    );
}
