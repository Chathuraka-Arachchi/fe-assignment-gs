import React from 'react';
import { FormProps } from '../interfaces/form';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Input, Textarea, Button, createStyles } from '@mantine/core';
import { yupResolver } from "@hookform/resolvers/yup";
import { colors } from '../constants/colors';
import { FormLabel } from '../../view/components/Forms/FormLabel';
import * as yup from "yup";

const useStyles = createStyles((theme) => ({
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    errorMessage: {
        color: colors.red,
    }
}));

export interface AddTicketsFormValues {
    email: string;
    title: string;
    description: string;
    price: string;
    amount: number;
    supplier: string;
}

export interface ticket {
    ticket: AddTicketsFormValues
}

const defaultValues: AddTicketsFormValues = {
    email: '',
    title: '',
    description: '',
    price: '',
    amount: 1,
    supplier: '',
};
                      
export const validationSchema = yup.object().shape({
    email: yup.string().required().email(),                          
    title:  yup.string().required(),
    description:  yup.string().required(),
    price:  yup.string().required(),
    amount:  yup.number().required(),
    supplier: yup.string().required()
} )

export const AddTicketsForm = ({ onSubmit }: FormProps<AddTicketsFormValues>) => {
    const { control, handleSubmit, formState: { errors }, } = useForm<AddTicketsFormValues>({ defaultValues,  resolver: yupResolver(validationSchema) });

    const { classes } = useStyles();

    return (
        <Grid>
            <Grid.Col span={12}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Email</FormLabel>
                                <Input onChange={onChange} value={value} name={name} />
                                {errors.email && <p className={classes.errorMessage}>{ errors.email.message}</p>}
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="title"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Title</FormLabel>
                                <Input onChange={onChange} value={value} name={name} />
                                {errors.title && <p className={classes.errorMessage}>{ errors.title.message}</p>}
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="description"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Description</FormLabel>
                                <Textarea onChange={onChange} value={value} name={name} />
                                {errors.description && <p className={classes.errorMessage}>{ errors.description.message}</p>}
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <Controller
                    name="price"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Price</FormLabel>
                                <Input
                                    type="number"
                                    onChange={onChange}
                                    value={value}
                                    name={name}
                                />
                                  {errors.price && <p className={classes.errorMessage}>{ errors.price.message}</p>}
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <Controller
                    name="amount"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Amount of tickets</FormLabel>
                                <Input
                                    type="number"
                                    onChange={onChange}
                                    value={value}
                                    name={name}
                                />
                                 {errors.amount && <p className={classes.errorMessage}>{ errors.amount.message}</p>}
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="supplier"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Supplier</FormLabel>
                                <Input onChange={onChange} value={value} name={name} />
                                {errors.supplier && <p className={classes.errorMessage}>{ errors.supplier.message}</p>}
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12} className={classes.buttonContainer}>
                <Button onClick={handleSubmit(onSubmit)}>Add tickets</Button>
            </Grid.Col>
        </Grid>
    );
};
