import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Category from "../src/components/Home/Category/Category";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import AppContext from "./Utils/context";
import CategoryProducts from "./components/Products/CategoryProducts/CategoryProducts";

function App() {
    return (
        <BrowserRouter>
        <AppContext>
        <Header />
        <Routes>
            <Route path="/" element={<>
        <Home/>
        <Newsletter />
        </>}/>
            <Route path="/category/" element={<Category />}/>
            <Route path="/categoryProducts/:id" element={<CategoryProducts />}/>
            <Route path="/SingleProduct/:id" element={<SingleProduct />}/>
            <Route path="/about/:id" element={< Newsletter/>}/>
        </Routes>
        // <Newsletter />
        <Footer />           
        </AppContext> 
        </BrowserRouter>

    );
}

export default App;
