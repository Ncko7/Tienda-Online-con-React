import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext() 

export const ShoppingCartProvider = ({children}) => {
    //Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    //Product Detail - Open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Checkout Side Menu - Open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenu] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false)

    // Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart - Order 
    const [order, setOrder] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

