import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from "./hooks/useTransactions";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes";

Modal.setAppElement("#root")


export function App() {



  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModal(false)
  }

  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme)
  }

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <TransactionProvider >
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <GlobalStyle />

        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />

        <Dashboard />
      </TransactionProvider>
    </ThemeProvider>
  );
}
