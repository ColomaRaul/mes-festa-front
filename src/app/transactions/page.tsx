'use client'

import {useEffect, useState} from "react";
import {getAllTransactions} from "@/lib/api/backend-api";
import {ProfitDataTable} from "@/app/transactions/profit-data-table";
import {ProfitColumns} from "@/app/transactions/profit-columns";

export default function Transactions() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allTransactions = await getAllTransactions();
                setData(allTransactions);
            } catch (error) {
                console.error('Error al obtener datos asíncronos:', error);
            }
        };

        fetchData(); // Llamamos a la función asíncrona intern
    }, []);

    return (
        <main>
            <h1>hello from transactions</h1>
            <ProfitDataTable columns={ProfitColumns} data={data}/>
        </main>
    )
}