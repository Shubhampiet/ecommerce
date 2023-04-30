import {useEffect, useContext } from "react";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import { fetchDataFromApi } from "../../Utils/api";
import "./Home.scss";
import { Context } from "../../Utils/context";


const Home = () => {

  const { products, setProducts, categories, setCategories } = useContext(Context);


  useEffect(() => {
    getCategories();
    getProducts();
  }, []);


  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*")
    .then((response) => {
      setProducts(response);
   })
  }

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*")
    .then((response) => {
      setCategories(response);
    });
  };

  return (
    <div >
      <Banner />
      <div className="mainContent">
        <div className="layout">
          <Category />
          <Products headingText={"Popular Products"} products={products.data}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
