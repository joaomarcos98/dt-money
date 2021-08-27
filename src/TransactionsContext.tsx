import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Trasaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext<Trasaction[]>([])

export function TransactionProvider({children}:TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Trasaction[]>([])

    useEffect(()=>{
        api.get("transactions")
        .then(response => setTransactions(response.data.transactions))
    },[])

    return (
        <TransactionsContext.Provider value={transactions}>
          {children}  
        </TransactionsContext.Provider>
    )
}