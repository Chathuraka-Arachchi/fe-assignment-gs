import React from 'react';
import './App.css';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';  
import { store } from './app/store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TicketsListPage } from './app/pages/tickets-list/TicketsListPage';
import { AddTicketsPage} from './app/pages/add-tickets/AddTicketsPages';


function App() {

    return (
        <BrowserRouter>
            <Provider store={store}>           
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        colorScheme: 'light',
                    }}
                >
                    <Routes>
                        <Route path="/" element={<AddTicketsPage/>}/>
                        <Route path="/ticket-list" element={<TicketsListPage/>}/>
                    </Routes>
                </MantineProvider>
             </Provider>
        </BrowserRouter>

    );
}

export default App;
