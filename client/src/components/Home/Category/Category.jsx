import "./Category.scss";
import { useContext, useState } from "react";
import { Context } from "../../../Utils/context";
import { useNavigate } from "react-router-dom"


const Category = () => {
    const { categories, products , setcategoryId} = useContext(Context);
    console.log("cat",categories)
    const navigate = useNavigate();

    const [isCategoryProduct, setIsCategoryProducts] = useState(false)

    function filteredData(id) {
            setcategoryId(id);
            setIsCategoryProducts(true);
            navigate("/categoryProducts/" + id);
    }

    return (

        <div className="shopByCategory">
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div key={item.id} className="category"
                        onClick={() => filteredData(item.id) } >
                        <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="" />
                    </div>
                ))}
            </div>
        </div>

    )
};

export default Category;
