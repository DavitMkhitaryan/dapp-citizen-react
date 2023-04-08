import { createAsyncThunk } from "@reduxjs/toolkit";
import contract from '../../utils/contract';

interface Citizen {
    id: string;
    name: string;
    age: string;
    city: string;
}

const fetchCitizensList = createAsyncThunk('citizens/fetchCitizensList', async () => {
    let newCitizensArr: Citizen[] = [];

    await contract.getPastEvents('Citizen', { fromBlock: 0, toBlock: 'latest' }).then((events: any) => {
        events.forEach((event: any) => {
            let citizen: Citizen = {
                id: event.returnValues[0],
                name: event.returnValues[3],
                age: event.returnValues[1],
                city: event.returnValues[2]
            }
            newCitizensArr.push(citizen)
        });
    });

    return newCitizensArr;
});

export { fetchCitizensList }