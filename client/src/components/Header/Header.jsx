import "./Header.scss";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx'
import { useContext, useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Utils/context";

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearchPage, setShowSearchPage] = useState(false);
    const Navigate = useNavigate()

const {cartItems}=useContext(Context)

    // HandleScroll function
    const HandleScroll = () => {

        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", HandleScroll);
    }, []);



    return (
        <>
            <header className={`navbar ${scrolled ? "sticky-header" : ""}`} >
                <div className="left">
                    <ul className="nav">
                        <li onClick={() => { Navigate("/") }}>Home</li>
                        <li onClick={() => { Navigate("/about/") }}>About</li>
                        <li onClick={() => { Navigate("/category/") }}>Category</li>
                    </ul>
                </div>
                <div className="leftHam">
                    <div className="ham">
                        <RxHamburgerMenu />
                    </div>

                </div>

                <div className="center">
                    <div className="icon">
                        DigitalDukan</div>
                </div>

                <div className="right">
                    <div className="wrapper">
                        <AiOutlineSearch onClick={() => setShowSearchPage(true)} search />
                        <AiOutlineHeart />
                        <div>
                            <AiOutlineShoppingCart onClick={() => setShowCart(true)} />
                        </div>
                        <span>{cartItems.length}</span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearchPage && <Search setShowSearchPage={setShowSearchPage} />}
        </>
    );
};

export default Header;
