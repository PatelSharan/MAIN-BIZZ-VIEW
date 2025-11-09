"use client"
import { createContext, useContext, useState } from "react"

const GeneralContext = createContext();


export const useGeneralContext = () => {
    return useContext(GeneralContext);
}


export const GeneralProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [contacts, setContacts] = useState([]);

    return (
        <GeneralContext.Provider value={{
            products,
            setProducts,
            contacts,
            setContacts
        }}>
            {children}
        </GeneralContext.Provider>
    )
}