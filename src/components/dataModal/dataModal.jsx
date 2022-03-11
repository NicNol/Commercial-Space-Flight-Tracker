import React, { useState, useEffect } from "react";
import {
    Button,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
} from "@chakra-ui/react";
import FormField from "./formField";
import tableConstraints from "../../../util/tableConstraints.json";

export default function DataModal({ onClose, isOpen, tableName, data }) {
    //Initialize starting value of FK dropdown from table data if available
    let agencyID = "NULL";
    let companyID = "NULL";
    if (data) {
        agencyID = "AgencyID" in data && data.AgencyID ? data.AgencyID : "NULL";
        companyID =
            "CompanyID" in data && data.CompanyID ? data.CompanyID : "NULL";
    }
    const [launchOperator, setLaunchOperator] = useState({
        agencyID,
        companyID,
    });

    const [saves, setSaves] = useState(0);

    useEffect(() => {
        if (dataValues.length && tableName === "Flights") {
            const AgencyIdIndex = tableConstraints.Flights.columns.findIndex(
                (col) => col.columnName === "AgencyID"
            );
            const CompanyIdIndex = tableConstraints.Flights.columns.findIndex(
                (col) => col.columnName === "CompanyID"
            );
            dataValues[AgencyIdIndex] = launchOperator.agencyID;
            dataValues[CompanyIdIndex] = launchOperator.companyID;
        }
    }, [launchOperator]);

    const modalHeader = data ? "Edit Entry" : "New Entry";
    const dataValues = Object.values(data);
    const props = {
        onClose: onClose,
        isOpen: isOpen,
        tableName: tableName,
        data: dataValues,
        launchOperator: launchOperator,
        setLaunchOperator: setLaunchOperator,
        saves: saves,
    };

    function validateFormData(formData) {
        for (const key of formData.keys()) {
            //console.log(`${key}: ${formData.get(key)}`);
            const value = formData.get(key).trim();

            if (value.length === 0) {
                return false;
            }

            formData.set(key, value);
        }

        return true;
    }

    function handleSave() {
        setSaves(saves + 1);
        const formName = `${tableName}Form`;
        const form = document.getElementById(formName);
        const formData = new FormData(form);
        if (!validateFormData(formData)) {
            return false;
        }

        if (tableName !== "Flights") {
            form.submit();
        }

        const { agencyID, companyID } = launchOperator;
        // Perform an exclusive OR between agencyID and companyID
        if (
            agencyID === "NULL" ? !(companyID === "NULL") : companyID === "NULL"
        ) {
            form.submit();
        }
    }

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            isCentered
            closeOnOverlayClick={false}
            scrollBehavior={"inside"}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{modalHeader}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex gap={1} mb={4}>
                        <Text color={"red"}>*</Text>
                        <Text>Indicates a required field</Text>
                    </Flex>
                    <Flex flexDirection={"column"} gap={2}>
                        <form
                            id={`${tableName}Form`}
                            action={`/api/${tableName}`}
                            method={"POST"}
                        >
                            {
                                <input
                                    type={"hidden"}
                                    name={"_method"}
                                    value={data ? "PUT" : "POST"}
                                ></input>
                            }
                            <FormField props={props} />
                        </form>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Flex justifyContent={"flex-end"} gap={1}>
                        <Button colorScheme={"green"} onClick={handleSave}>
                            Save
                        </Button>
                        <Button
                            colorScheme={"red"}
                            variant={"outline"}
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
