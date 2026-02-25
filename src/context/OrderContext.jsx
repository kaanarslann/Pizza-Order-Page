import { useState, createContext } from "react";

export const OrderContext = createContext();

export const OrderContextProvider = ({children}) => {
    const [order, setOrder] = useState(null);

    return (
        <OrderContext.Provider value={{order, setOrder}}>
            {children}
        </OrderContext.Provider>
    )
}