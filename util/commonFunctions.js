import { IoReturnUpBackOutline } from "react-icons/io5";

export function filterResults(filterValue, fetchedData, setTableState) {
    const newTableState = fetchedData.filter((row) => {
        let output = false;
        const rowValues = Object.values(row);

        rowValues.forEach((cell) => {
            //If cell is null, don't attempt string methods on it
            if (!cell) return;

            cell.toString().toLowerCase().includes(filterValue.toLowerCase())
                ? (output = true)
                : "";
        });
        return output;
    });
    setTableState(newTableState);
}

export function fetchData(apiEndpoint, handleFetchedData) {
    fetch(apiEndpoint)
        .then((response) => response.json())
        .then((data) => handleFetchedData(data));
}
