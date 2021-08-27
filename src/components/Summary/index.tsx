import { Container } from "./styles";
import entradas from "../../assets/entradas.svg"
import saidas from "../../assets/saidas.svg"
import total from "../../assets/total.svg"
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";


export function Summary() {

    const transactons = useContext(TransactionsContext)
    console.log(transactons);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="Entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={saidas} alt="Saídas" />
                </header>
                <strong>- R$ 500,00</strong>
            </div>
            <div className="highlightBackground">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>

        </Container>
    )
}