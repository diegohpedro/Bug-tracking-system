import React, {createContext, useEffect, useState, useContext} from 'react';

import api from '../services/api';

export const ProjetosContext = createContext();

export default function ProjetosProvider({ children }) {

    return (
        <ProjetosContext.Provider value={{ 
            projetos, 
            setProjetos,
            atualizar,
            setAtualizar
            }}>
                {children}
        </ProjetosContext.Provider>
    )
}