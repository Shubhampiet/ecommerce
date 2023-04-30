import "./SingleProduct.scss";
import { useContext, useState } from "react";
import { Context } from "../../Utils/context";
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import { FaCartPlus } from "react-icons/fa"
import { TiSocialLinkedinCircular, TiSocialFacebookCircular, TiSocialInstagramCircular, TiSocialTwitterCircular } from "react-icons/ti"

const SingleProduct = () => {
    const { product, handleAddToCart, cartObject, incriment, decriment } = useContext(Context)
    console.log("product", product)

    return (
        <div className="singleProduct">
            <div className="productContent">
                <div className="productImage">
                    <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + product.img.data.attributes.url} alt="" />
                </div>

                <div className="productDetails">
                    <div className="textContent">
                        <span className="productName">{product.title}</span>
                        <span className="productPrice">&#8377;{product.price}</span>
                        <span className="productDetails">{product.description}</span>
                    </div>
                    <div className="icons">
                        <div className="cartDetails">
                            <div className="quantityCounter">
                                <button onClick={decriment} >-</button>
                                <span>{cartObject.quantity}</span>
                                <button onClick={incriment}>+</button>
                            </div>
                            <div className="atcButton">

                                <button onClick={() => handleAddToCart(product, cartObject.quantity)} > <FaCartPlus />  ADD TO CART</button>
                            </div>
                        </div>
                        <div className="category">
                            <h4>Category:</h4>
                            <span><p>{product.category.data.attributes.title}</p></span>
                        </div>
                        <div className="share">
                            <h4>Share:</h4>
                            <div className="iconsImage">
                                <TiSocialLinkedinCircular />
                                <TiSocialFacebookCircular />
                                <TiSocialTwitterCircular />
                                <TiSocialInstagramCircular />
                            </div>
                        </div>
                    </div>
                </div >
            </div>
            <RelatedProducts name={"Related Products"} />

        </div>
    )
};

export default SingleProduct;
