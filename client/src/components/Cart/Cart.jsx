import "./Cart.scss";
import { MdClose } from "react-icons/md"
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../Utils/context";


const Cart = ({ setShowCart }) => {
const{subtotal}=useContext(Context)
    return (
        <div className="cartPanel">
            <div className="opacLayer">

            </div>
            <div className="cartContent">

                <div className="cartHeader">
                    <h1>Cart Items</h1>
                    <span className="closeButton" onClick={() => setShowCart(false)}> Close<MdClose /></span>
                </div>
                    <CartItem/>
                <div className="bottom">
                    <div className="subtotal">
                        <div className="title">Subtotal</div>
                        <div className="price">&#8377;{subtotal}</div>
                    </div>
                    <div className="checkout">Chectout</div>
                </div>
            </div>

        </div>
    )
};

export default Cart;
