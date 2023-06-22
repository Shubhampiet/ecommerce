import {useEffect, useContext } from "react";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
// import { fetchDataFromApi } from "../../Utils/api";
import "./Home.scss";
import { Context } from "../../Utils/context";
import data from "../../data/category.json"
import categoryProducts from "../../data/categoryProducts.json"


const Home = () => {

  const { products, setProducts, setCategories } = useContext(Context);

  useEffect(() => {
    setCategories(data);
    setProducts(categoryProducts)
  }, []);

  return (
    <div >
      <Banner />
      <div className="mainContent">
        <div className="layout">
          <Category />
          <Products headingText={"Popular Products"} products={products}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
