import React, {useEffect} from 'react';
import { Paper, createStyles, Center } from '@mantine/core';
import { PageLayout } from '../../../view/components/PageLayout/PageLayout';
import { colors } from '../../constants/colors';
import { TicketsListTable, TicketsListTableItemVM } from '../../tables/TicketsListTable';
import {  fetchTickets } from '../../store/ticketsSlice'
import {RootState } from '../../store/store'
import { useDispatch, useSelector } from 'react-redux';

// const ticketList: TicketsListTableItemVM[] = [
//     {
//         id: 'id-5426463',
//         email: 'test@example.com',
//         title: 'ticket title',
//         description: 'ticket description',
//         price: 'ticket price',
//         amount: 5,
//         supplier: 'test supplier',
//     },
// ];

const useStyles = createStyles((theme) => ({
    formContainer: {
        width: 850,
        minHeight: 500,
    },
    header: {
        marginTop: 0,
        textAlign: 'center',
        color: colors.blue,
    },
}));

export const TicketsListPage = () => {
    const { classes } = useStyles();
    const dispatch = useDispatch<any>();
    const list: TicketsListTableItemVM[] = useSelector((state: RootState) => state.ticketsReducer.ticketList);
    const listStatus: string = useSelector((state: RootState) => state.ticketsReducer.status);

    useEffect(()=>{
        if(listStatus === 'idle'){
            dispatch(fetchTickets())
        }
    },[listStatus,dispatch]);
    
    return (
        <PageLayout>
            <Center>
                <Paper p="xl" shadow="md" className={classes.formContainer}>
                    <h3 className={classes.header}>Tickets list</h3>
                    <TicketsListTable items={list} />
                </Paper>
            </Center>
        </PageLayout>
    );
};
