import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TicketsListTableItemVM } from '../tables/TicketsListTable';

const BASE_URL = 'http://localhost:5000/';
// navDrawer initial state
export interface ticketsInitialState {
    ticketList: TicketsListTableItemVM[];
    status: string,
    error: string | undefined
  }
  
const initialState : ticketsInitialState = {
    ticketList: [],
    status:'idle', //idle, success, error, loading,
    error:''
};


export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTickets.pending, (state)=>{
            state.status = 'loading'
        })
        builder.addCase(fetchTickets.fulfilled, (state, action)=>{
            state.status = 'loaded'
            state.ticketList = action.payload?.data 
        })
        builder.addCase(fetchTickets.rejected, (state, action)=>{
            state.status = 'loaded'
            state.error = action.error.message
        })
    }
});

export const fetchTickets =  createAsyncThunk('tickets/fetchTickets', async () => {
        const response = await axios.get(`${BASE_URL}tickets`);
        const data = await response.data
        return data;
   
});


export const ticketList = (state: ticketsInitialState) => state.ticketList
export const status = (state: ticketsInitialState) => state.status
export const error = (state: ticketsInitialState) => state.error
export default ticketsSlice.reducer;
