import React, { useRef, useState } from "react";
import { Flex, Select } from "@chakra-ui/react";

export default function DatePicker() {
    const yearOptions = () => {
        let output = [];
        for (let i = 1921; i < 2023; i++) {
            output.push(
                <option key={i} value={i}>
                    {i}
                </option>
            );
        }
        return output;
    };

    const monthSelector = useRef(1);
    const [month, setMonth] = useState(1);

    function getDaysinMonth(month) {
        const key = {
            1: 31,
            2: 28,
            3: 31,
            4: 30,
            5: 31,
            6: 30,
            7: 31,
            8: 31,
            9: 30,
            10: 31,
            11: 30,
            12: 31,
        };
        return key[month];
    }

    function handleMonthChange() {
        const newMonth = monthSelector.current.value;
        //setMonth(parseInt(newMonth));
    }

    return (
        <Flex>
            <Select ref={monthSelector} onChange={handleMonthChange()}>
                <option key={1} value="01">
                    January
                </option>
                <option key={2} value="02">
                    February
                </option>
                <option key={3} value="03">
                    March
                </option>
                <option key={4} value="04">
                    April
                </option>
                <option key={5} value="05">
                    May
                </option>
                <option key={6} value="06">
                    June
                </option>
                <option key={7} value="07">
                    July
                </option>
                <option key={8} value="08">
                    August
                </option>
                <option key={9} value="09">
                    September
                </option>
                <option key={10} value="10">
                    October
                </option>
                <option key={11} value="11">
                    November
                </option>
                <option key={12} value="12">
                    December
                </option>
            </Select>
            <Select>
                <option key={1} value="01">
                    1
                </option>
                <option key={2} value="02">
                    2
                </option>
                <option key={3} value="03">
                    3
                </option>
                <option key={4} value="04">
                    4
                </option>
                <option key={5} value="05">
                    5
                </option>
                <option key={6} value="06">
                    6
                </option>
                <option key={7} value="07">
                    7
                </option>
                <option key={8} value="08">
                    8
                </option>
                <option key={9} value="09">
                    9
                </option>
                <option key={10} value="10">
                    10
                </option>
                <option key={11} value="11">
                    11
                </option>
                <option key={12} value="12">
                    12
                </option>
                <option key={13} value="13">
                    13
                </option>
                <option key={14} value="14">
                    14
                </option>
                <option key={15} value="15">
                    15
                </option>
                <option key={16} value="16">
                    16
                </option>
                <option key={17} value="17">
                    17
                </option>
                <option key={18} value="18">
                    18
                </option>
                <option key={19} value="19">
                    19
                </option>
                <option key={20} value="20">
                    20
                </option>
                <option key={21} value="21">
                    21
                </option>
                <option key={22} value="22">
                    22
                </option>
                <option key={23} value="23">
                    23
                </option>
                <option key={24} value="24">
                    24
                </option>
                <option key={25} value="25">
                    25
                </option>
                <option key={26} value="26">
                    26
                </option>
                <option key={27} value="27">
                    27
                </option>
                <option key={28} value="28">
                    28
                </option>
                {getDaysinMonth(month) >= 29 ? (
                    <option value="29">29</option>
                ) : (
                    ""
                )}
                {getDaysinMonth(month) >= 30 ? (
                    <option value="30">30</option>
                ) : (
                    ""
                )}
                {getDaysinMonth(month) >= 31 ? (
                    <option value="31">31</option>
                ) : (
                    ""
                )}
            </Select>
            <Select>{yearOptions()}</Select>
        </Flex>
    );
}
