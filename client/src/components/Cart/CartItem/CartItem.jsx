import "./CartItem.scss";
import { MdClose } from "react-icons/md"
import { useContext } from "react";
import { Context } from "../../../Utils/context";

const CartItem = ({ item }) => {

    const {handleRemoveFromCart, cartItems,setcartItems, quantity } = useContext(Context)
    console.log("cI",cartItems )

    // function for increasing the CartItem quantity
    const add = (index) => {
        const items=[...cartItems]
        items[index].quantity += 1
        setcartItems(items)
        console.log("CI",cartItems)
    }
    
    // function for decreasing the CartItem quantity
        const subtract = (index) => {
            const items=[...cartItems]
            if( items[index].quantity === 1) return;
            items[index].quantity -= 1
            setcartItems(items)
            console.log("CI",cartItems)
        }

    return (
        <div >
            
            {cartItems.map((item,index) => (
                
                <div className="cartProducts">
                <div className="productImage">
                    <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + item.product.img.data.attributes.url} alt="" />
                </div>
                <div className="productDetails">
                    <div className="productNameAndButton">
                        <div className="produtName">{item.product.title.slice(0,15 ) + "..."}.</div>
                        <span className="removeItem" onClick={()=>{handleRemoveFromCart(index)}}><MdClose /></span>
                    </div>
                    <div className="quantityAndPrice">
                        <div className="quantityCounter">
                            <button onClick={()=>{subtract(index)}}>-</button>
                            <div className="quantityBox">{item.quantity}</div>
                            <button onClick={()=>{add(index)}}>+</button>
                        </div>
                        <div className="price">
                            <span>{item.quantity}</span>
                            <span>*</span>
                            <span>{item.product.price}</span>
                        </div>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
};

export default CartItem;
