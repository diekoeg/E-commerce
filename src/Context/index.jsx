import React from 'react'

const CartContext = React.createContext();

function CartContextProvider ({children}){
    //To increment the shopping cart quantity 
    const [count, setCount] = React.useState(0)
    
    //Product detail --- Open/Close
    const [showProdDetail, setShowProdDetail] = React.useState(false)
    const openProductDetail = () => {
        setShowProdDetail(true)
        setShowCheckoutMenu(false)
    }
    const closeProductDetail = () => setShowProdDetail(false)

    //Product checkout --- Open/Close
    const [showCheckoutMenu, setShowCheckoutMenu] = React.useState(false)
    const openCheckoutMenu = () => {
        setShowCheckoutMenu(true)
        setShowProdDetail(false)
    }
    const closeCheckoutMenu = () => setShowCheckoutMenu(false)

    //Produt details/description
    const [productDetails, setProductDetails] = React.useState({})

    //Shopping cart --- Add products to cart
    const [cartProducts, setCartProducts] = React.useState([])

    ///Shopping cart -- Order
    const [order, setOrder] = React.useState([])


    return (
        <CartContext.Provider value={{
            count,
            setCount,
            showProdDetail,
            openProductDetail,
            closeProductDetail,
            productDetails, 
            setProductDetails,
            cartProducts, 
            setCartProducts,
            showCheckoutMenu, 
            setShowCheckoutMenu,
            openCheckoutMenu,
            closeCheckoutMenu,
            order, 
            setOrder
        }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider}