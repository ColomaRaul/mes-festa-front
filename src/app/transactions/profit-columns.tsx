'use client'

import {ColumnDef} from "@tanstack/table-core";

export type Profit = {
    date: string,
    type: string,
    amount: number,
}

export const ProfitColumns: ColumnDef<Profit>[] = [
    {
        accessorKey: 'date',
        header: 'Data',
        cell: ({row}) => {
            const date = row.getValue('date');
            const formatted = new Date(date as string).toLocaleDateString();

            return <div>{formatted}</div>
        }
    },
    {
        accessorKey: 'typeFinancial',
        header: 'Concepte',
    },
    {
        accessorKey: 'amount',
        header: 'Quantitat',
        cell: ({row}) => {
            // @ts-ignore
            const amount: number = row.getValue('amount') / 100;
            // @ts-ignore
            const formatted: string = amount as string;

            // @ts-ignore
            return formatted.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
        }
    }
]