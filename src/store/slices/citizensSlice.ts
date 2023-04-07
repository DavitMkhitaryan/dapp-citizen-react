import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import contract from '../../utils/contract';

interface Citizen {
    id: string;
    name: string;
    age: string;
    city: string;
}

interface CitizensState {
    citizenList: Citizen[];
}

const initialState: CitizensState = {
    citizenList: []
}

const citizensSlice = createSlice({
    name: 'citizens',
    initialState,
    reducers: {
        fetchCitizensList: (state) => {
            let newCitizensArr: Citizen[] = [];

            console.log('hello');

            contract.getPastEvents('Citizen', { fromBlock: 0, toBlock: 'latest' }).then((events: any) => {
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

            state.citizenList = newCitizensArr;
            console.log(state.citizenList);
        }
    }
});

export const { fetchCitizensList } = citizensSlice.actions;
export const citizensReducer = citizensSlice.reducer;