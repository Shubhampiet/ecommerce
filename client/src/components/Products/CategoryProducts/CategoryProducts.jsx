// import './CategoryProducts.scss'
import React, { useContext } from 'react'
import { Context } from '../../../Utils/context'
import Products from '../Products'

function CategoryProducts() {
  const { products, categoryId, categories } = useContext(Context)

  console.log("cp :", categoryId)
  console.log("cate :", categories)

  const makeFiteration = products.data.filter((data) => { return data.attributes.category.data.id === categoryId })
  console.log("makeFiteration",makeFiteration)
  const titleFilteration = categories.data.filter((element) => { return element.id === categoryId })
  const titleText = titleFilteration[0].attributes.title;
  return (
    <div className="productsContainer"> 
         <Products headingText={titleText} products={makeFiteration}/> </div>

  );
};

export default CategoryProducts;