'use client'

import {useEffect, useState} from "react";
import {getAllTransactions} from "@/lib/api/backend-api";
import {ProfitDataTable} from "@/app/transactions/profit-data-table";
import {ProfitColumns} from "@/app/transactions/profit-columns";
import {ExpenseDataTable} from "@/app/transactions/expense-data-table";
import {ExpenseColumns} from "@/app/transactions/expense-columns";

export default function Transactions() {
    const [profitData, setProfitData] = useState([]);
    const [expenseData, setExpenseData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allTransactions = await getAllTransactions();
                // @ts-ignore
                setProfitData(allTransactions.filter(item => item.typeTransaction === 'PROFIT'));
                // @ts-ignore
                setExpenseData(allTransactions.filter(item => item.typeTransaction === 'EXPENSE'));
            } catch (error) {
                console.error('Error al obtener datos asíncronos:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <main>
            <div className="container py-10 mx-auto w-100">
                <h1>Ingresos</h1>
                <div>
                    <ProfitDataTable columns={ProfitColumns} data={profitData}/>
                </div>
                <h1>Despeses</h1>
                <div>
                    <ExpenseDataTable columns={ExpenseColumns} data={expenseData}/>
                </div>
            </div>
        </main>
    )
}