import React from 'react';
import { Paper, createStyles, Center } from '@mantine/core';
import { PageLayout } from '../../../view/components/PageLayout/PageLayout';
import { AddTicketsForm, AddTicketsFormValues } from '../../forms/AddTicketsForm';
import { colors } from '../../constants/colors';
import { createTickets } from '../../store/addTicktSlice'
import { useDispatch } from 'react-redux';
//import {RootState } from '../../store/store'

const useStyles = createStyles((theme) => ({
    formContainer: {
        width: 500,
        minHeight: 500,
    },
    header: {
        marginTop: 0,
        textAlign: 'center',
        color: colors.blue,
    },
}));

export const AddTicketsPage = () => {
    const { classes } = useStyles();
    const dispatch = useDispatch<any>();

    const onFormSubmit = (values: AddTicketsFormValues) => {
        console.log('Implement submitting the form', values);
        const ticket = {ticket: values}
        dispatch(createTickets(ticket));
    };

    return (
        <PageLayout>
            <Center>
                <Paper p="xl" shadow="md" className={classes.formContainer}>
                    <h3 className={classes.header}>Add Tickets</h3>
                    <AddTicketsForm onSubmit={onFormSubmit} />
                </Paper>
            </Center>
        </PageLayout>
    );
};
