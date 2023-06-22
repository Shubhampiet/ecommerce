
import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, headingText }) => {
  return (
    <div className="productsContainer">
      <div className="secHeading">{headingText}</div>
      <div className="products">
        
      {products?.map((item) => {
  console.log("ppp", item);
  return <Product key={item.id} data={item} />;
})}

      </div>
    </div>
  );
};

export default Products;
