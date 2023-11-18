'use client'

import {useEffect, useState} from "react";
import {getAllLoggedUserTransactions} from "@/lib/api/backend-api";
import {ProfitDataTable} from "@/app/organization/[organizationId]/transactions/profit-data-table";
import {ProfitColumns} from "@/app/organization/[organizationId]/transactions/profit-columns";
import {ExpenseDataTable} from "@/app/organization/[organizationId]/transactions/expense-data-table";
import {ExpenseColumns} from "@/app/organization/[organizationId]/transactions/expense-columns";
import {useSession} from "next-auth/react";

export default function TransactionsPage({ params }: { params: { organizationId: string } }) {
    const [profitData, setProfitData] = useState([]);
    const [expenseData, setExpenseData] = useState([]);
    const {data: session, status} = useSession();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (session) {
                    const allTransactions = await getAllLoggedUserTransactions(params.organizationId, session?.user?.access_token);
                    // @ts-ignore
                    setProfitData(allTransactions.filter(item => item.typeTransaction === 'PROFIT'));
                    // @ts-ignore
                    setExpenseData(allTransactions.filter(item => item.typeTransaction === 'EXPENSE'));
                }
            } catch (error) {
                console.error('Error al obtener datos asíncronos:', error);
            }
        };

        fetchData();
    }, [session]);

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