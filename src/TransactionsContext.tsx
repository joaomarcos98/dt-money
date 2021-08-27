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

type TrasactionInput = Omit<Trasaction, "id" | "createdAt">

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Trasaction[];
    createTransaction: (transaction: TrasactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Trasaction[]>([])

    useEffect(() => {
        api.get("transactions")
            .then(response => setTransactions(response.data.transactions))
    }, [])

    function createTransaction(transaction: TrasactionInput) {

        api.post("/transactions", transaction)
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }} >
            {children}
        </TransactionsContext.Provider>
    )
}