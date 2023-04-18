import React from 'react';
import { Table } from '@mantine/core';
import { createStyles } from '@mantine/core';
import { colors } from '../constants/colors';
export interface TicketsListTableItemVM {
    id: string;
    email: string;
    title: string;
    description: string;
    price: string;
    amount: number;
    supplier: string;
}

interface TicketsListTableProps {
    items: TicketsListTableItemVM[];
}

const useStyles = createStyles((theme) => ({
    tHead: {
        marginTop: 0,
        textAlign: 'center',
        color: `${colors.blue} !important` ,
       
    },
  
}));

export const TicketsListTable = ({ items }: TicketsListTableProps) => {
    const { classes } = useStyles();
    const rows =items && items.map((element) => (
        <tr key={element.id}>
            <td>{element.email}</td>
            <td>{element.title}</td>
            <td>{element.description}</td>
            <td>{element.price}</td>
            <td>{element.amount}</td>
            <td>{element.supplier}</td>
        </tr>
    ));

    return (
        <Table striped  verticalSpacing="xs">
            <thead>
                <tr>
                    <th className={classes.tHead}>Email</th>
                    <th className={classes.tHead}>Title</th>
                    <th className={classes.tHead}>Description</th>
                    <th className={classes.tHead}>Price</th>
                    <th className={classes.tHead}>Amount</th>
                    <th className={classes.tHead}>Supplier</th>
                </tr>
            </thead>
            <tbody>{ rows}</tbody>
        </Table>
    );
};
