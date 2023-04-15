import React from 'react';
import './App.css';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';  
import { store } from './app/store/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TicketsListPage } from './app/pages/tickets-list/TicketsListPage';
//import { AddTicketsPage} from './app/pages/add-tickets/AddTicketsPages';
import  Home from './app/pages/Home'

// const useStyles = createStyles((theme) => ({
//     bodyBackground: {
//         backgroundColor: colors.lightBackground,
//         minHeight: '100vh',
//     },
// }));

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
                        <Route path="/" element={<Home/>}/>
                        <Route path="/ticket-list" element={<TicketsListPage/>}/>
                         {/* <Route path="/add-ticket" element={<AddTicketsPage/>}/> */}
                    </Routes>
                </MantineProvider>
             </Provider>
        </BrowserRouter>

    );
}

export default App;
