import { Container } from "./styles";
import entradas from "../../assets/entradas.svg"
import saidas from "../../assets/saidas.svg"
import total from "../../assets/total.svg"
import { useTransactions } from "../../hooks/useTransactions";


export function Summary() {

    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === "deposit") {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL"
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={saidas} alt="Saídas" />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL"
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="highlightBackground">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-br", {
                        style: "currency",
                        currency: "BRL"
                    }).format(summary.total)}
                </strong>
            </div>

        </Container>
    )
}