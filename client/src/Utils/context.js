import { createContext, useEffect } from "react";
import { useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [categoryId, setcategoryId] = useState([]);
    const [product, setProduct] = useState([]);
    const [cartItems, setcartItems] = useState([]);
    const [cartItemsQuantity, setcartItemsQuantity] = useState();
    const [cartSubtotal, setcartSubtotal] = useState(0);
    const [quantity, setquantity] = useState(0);
    const [subtotal, setsubtotal] = useState(0);
    const location = useState();

    useEffect(() => { window.scrollTo(0, 0) }, [location])
    useEffect(() => {
        let totalPrice = 0;
        cartItems.map((item) => (totalPrice += item.quantity * item.product.price))
        setsubtotal(totalPrice)
    }, [cartItems])


    const cartObject = {
        "product": product,
        "quantity": quantity
    }

    // decriment counter function

    const decriment = () => {
        if (quantity === 0) {
            setquantity(cartObject.quantity)
        } else
            setquantity(cartObject.quantity - 1)
        console.log("co", cartObject.quantity)
        console.log("CI", cartItems)
    }

    // incriment counter function
    const incriment = () => {
        setquantity(cartObject.quantity + 1)
        console.log("CI", cartItems)
    }

    // handleAddToCart function
    const handleAddToCart = (product, quantity) => {
        const items = [...cartItems]


        if (items.length === 0) {
            setcartItems(prevArr => [...prevArr, cartObject])
            console.log("I am if")
        }
        else {
            const existingItem = items.find((item) => item.product.img.data.id === cartObject.product.img.data.id)
            console.log("I am else")
            if (existingItem) {
                existingItem.quantity += cartObject.quantity
                setcartItems(items)
                console.log("I am elseIf")
            }
            else {
                if (cartObject.quantity === 0) return;
                setcartItems(prevArr => [...prevArr, cartObject]);
                console.log("I am elseElse")
            }
        }
    }

    // handleRemoveFromCart function
    const handleRemoveFromCart = (index) => {
        const items = [...cartItems]
        const prod = items.filter((p, i) => i !== index);

        setcartItems(prod)
        console.log("hrc", cartItems)
        console.log("prod", prod)
        console.log("index", index)
    }

    return (
        <Context.Provider
            value={{
                categories,
                setCategories,
                products,
                setProducts,
                categoryId,
                setcategoryId,
                product,
                setProduct,
                cartItems,
                setcartItems,
                cartItemsQuantity,
                setcartItemsQuantity,
                cartSubtotal,
                setcartSubtotal,
                incriment,
                decriment,
                handleAddToCart,
                handleRemoveFromCart,
                quantity,
                setquantity,
                cartObject,
                subtotal,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default AppContext;