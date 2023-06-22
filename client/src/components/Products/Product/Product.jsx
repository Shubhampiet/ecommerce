import { useNavigate } from "react-router-dom";
import "./Product.scss";
import { useContext } from "react";
import { Context } from "../../../Utils/context";


const Product= ({ data}) =>{
    const{ setProduct}=useContext(Context)
    const Navigate=useNavigate();

const singleProductPage=(id)=>{
    setProduct(data)
    Navigate("/singleProduct/" + id )
}

    return(
        <div className="productCard" onClick={()=>{singleProductPage(data.id)}}>
            <div className="thumbnail">
                <img src={data.imageUrl} alt="" />
            </div>
            <div className="productDetails">
            <span className="name">{data.title.slice(0, 10) + '...'}</span>
            <span className="price">&#8377;{data.price}</span>            
            </div>
        </div>
    );
};
export default Product