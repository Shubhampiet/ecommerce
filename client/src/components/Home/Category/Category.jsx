import "./Category.scss";
import { useContext, useState } from "react";
import { Context } from "../../../Utils/context";
import { useNavigate } from "react-router-dom"


const Category = () => {
    const { categories, products, setcategoryId } = useContext(Context);
    console.log("cat", categories)
    const navigate = useNavigate();

    const [isCategoryProduct, setIsCategoryProducts] = useState(false)

    function filteredData(id) {
        setcategoryId(id);
        // console.log(id)
        setIsCategoryProducts(true);
        navigate("/categoryProducts/" + id);
    }

    return (

        <div className="shopByCategory">
            <div className="secHeading">categories</div>
            <div className="categories">

                {categories?.map((item) => (
                    <div key={item.id} className="category"
                        onClick={() => filteredData(item.id)} >
                        <img src={item.imageUrl} />
                    </div>
                ))}
            </div>
        </div>

    )
};

export default Category;
