import { createAsyncThunk } from "@reduxjs/toolkit";
import contract from '../../utils/contract';

interface Citizen {
    id: string;
    name: string;
    age: string;
    city: string;
}

const fetchCitizensList = createAsyncThunk('citizens/fetchCitizensList', async () => {
    
    const response = await contract.getPastEvents('Citizen', { fromBlock: 0, toBlock: 'latest' });

    const citizens = response.map((event: any) => {
        let citizen: Citizen = {
            id: event.returnValues[0],
            name: event.returnValues[3],
            age: event.returnValues[1],
            city: event.returnValues[2]
        }
        
        return citizen;
    });
    
    return citizens;
});

export { fetchCitizensList }