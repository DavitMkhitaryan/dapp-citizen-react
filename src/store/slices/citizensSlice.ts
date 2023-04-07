import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '..';
import { fetchCitizensList } from '../thunks/fetchCitizensList';
interface Citizen {
    id: string;
    name: string;
    age: string;
    city: string;
}

interface CitizensState {
    citizenList: Citizen[];
    isLoading: boolean;
    error: string | null;
}

const initialState: CitizensState = {
    citizenList: [],
    isLoading: false,
    error: null
}

const citizensSlice = createSlice({
    name: 'citizens',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCitizensList.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCitizensList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.citizenList = action.payload;
        });
        builder.addCase(fetchCitizensList.rejected, (state, action) => {
            state.isLoading = false;
        });
    }
});

export const citizensReducer = citizensSlice.reducer;