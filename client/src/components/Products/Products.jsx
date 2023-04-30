import "./Products.scss";
import Product from "./Product/Product";


const Products = ({ products, innerPage, headingText }) => {
    return (
        <div className="productsContainer">
            {!innerPage && <div className="secHeading">{headingText}</div>}
            <div className="products">

                {products?.map((item) => (
                    <Product
                        key={item.id}
                        data={item.attributes}
                    />
                ))}
            </div>
        </div>
    );
};
export default Products