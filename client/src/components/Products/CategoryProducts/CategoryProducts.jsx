
import React, { useContext } from 'react'
import { Context } from '../../../Utils/context'
import Products from '../Products'

function CategoryProducts() {
  const { products, categoryId, categories } = useContext(Context)

  console.log("cp :", categoryId)
  console.log("products :", products)

  const makeFiteration = products.filter((data) => data.categoryId === categoryId);
  console.log("makeFiteration",makeFiteration) 
  const titleFilteration = categories.filter((element) => { return element.id === categoryId })
  const titleText = titleFilteration[0].title;
  return (
    <div className="productsContainer"> 
         <Products headingText={titleText} products={makeFiteration}/> </div>

  );
};

export default CategoryProducts;