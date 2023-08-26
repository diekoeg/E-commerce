import React from 'react'

const CartContext = React.createContext();

function CartContextProvider ({children}){
    //To increment the shopping cart quantity 
    const [count, setCount] = React.useState(0)
    
    //Product detail --- Open/Close
    const [showProdDetail, setShowProdDetail] = React.useState(false)
    const openProductDetail = () => {setShowProdDetail(true)}
    const closeProductDetail = () => setShowProdDetail(false)

    //Produt details/description
    const [productDetails, setProductDetails] = React.useState({})

    return (
        <CartContext.Provider value={{
            count,
            setCount,
            showProdDetail,
            openProductDetail,
            closeProductDetail,
            productDetails, 
            setProductDetails
        }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider}