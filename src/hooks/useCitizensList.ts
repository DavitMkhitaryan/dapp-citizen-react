import { useEffect, useState, useMemo } from "react";
import useConnector from "../hooks/useConnector";

export interface Citizen {
    id: string;
    name: string;
    age: string;
    city: string;
}

const useCitizensList = () => {

    const { contract } = useConnector();

    const [citizenList, setCitizenList] = useState<Citizen[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const pageSize = 5;

    useEffect(() => {
        let newCitizensArr: Citizen[] = [];

        contract.getPastEvents('Citizen', { fromBlock: 0, toBlock: 'latest' }).then((events: any) => {
            events.forEach((event: any) => {
                let citizen: Citizen = {
                    id: event.returnValues[0],
                    name: event.returnValues[3],
                    age: event.returnValues[1],
                    city: event.returnValues[2]
                }
                newCitizensArr.push(citizen);
            });
            setCitizenList([...newCitizensArr]);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return citizenList.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, citizenList]);

    return { currentTableData, citizenList, currentPage, pageSize, setCurrentPage };
}

export default useCitizensList;