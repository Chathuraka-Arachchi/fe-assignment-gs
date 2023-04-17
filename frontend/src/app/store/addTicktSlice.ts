import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {  ticket } from '../forms/AddTicketsForm';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/';
export interface createTicketsInitialState {
    message: string;
    error: string | undefined
  }
  
const initialState : createTicketsInitialState = {
    message: '',
    error:''
};


export const AddTicketsPages = createSlice({
    name: 'createTicket',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(createTickets.fulfilled, (state, action)=>{
            state.message = action.payload?.data 
        })
        builder.addCase(createTickets.rejected, (state, action)=>{
            state.error = action.error.message
        })
    }
});


export const createTickets = createAsyncThunk('tickets/createTicket', async (ticketData: ticket) => {
    const response = await axios.post(`${BASE_URL}tickets`, ticketData);
    const data = await response.data
    return data;

});

export const createTicket = (state: createTicketsInitialState) => state.message
export const error = (state: createTicketsInitialState) => state.error
export default AddTicketsPages.reducer;
