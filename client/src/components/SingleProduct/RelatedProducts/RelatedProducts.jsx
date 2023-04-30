import { useContext } from "react";
import Products from "../../Products/Products";
import { Context } from "../../../Utils/context";

const RelatedProducts = ({headingText}) => {
    const{product, products}=useContext(Context)
    console.log("singleProduct",product.category.data.id)
    console.log("products",products)
    const relatedProducts=products.data.filter((element)=>{return element.attributes.category.data.id===product.category.data.id})
    console.log("rp",relatedProducts)
    return(
        <div className="products">
         <Products headingText={"Related PRoducts"}  products={relatedProducts}/>
          </div>

    )
};

export default RelatedProducts;
