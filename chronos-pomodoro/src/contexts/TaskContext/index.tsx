import { createContext } from "react";

// Criando context e passando valor inicial
export const TaskContext = createContext({
    chave: 'valor',
});