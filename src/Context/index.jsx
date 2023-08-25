import React from 'react'

const CartContext = React.createContext();

function CartContextProvider ({children}){
    const [count, setCount] = React.useState(0)
    return (
        <CartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider}