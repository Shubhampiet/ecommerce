import "./Search.scss";
import { MdClose } from "react-icons/md"
import { useContext, useState } from "react";
import { Context } from "../../../Utils/context";


const Search = ({ setShowSearchPage }) => {
    const [data, setData] = useState([])

    const { products } = useContext(Context)
    const [query, setQuery] = useState("");

    const onChangeHandler = (e) => {
        setQuery(e.target.value);
        console.log(data)
        setData(products.filter((product) => { return product.title.toLowerCase().includes(query.toLowerCase()) }))
        
        if (query.length===0) {
            setData([]);
        };
        console.log("q",query)
    }

    return <div>
        <div className="searchPage">
            <div className="searchHeader">
                <div className="searchHeaderText">
                    <input
                        type="text"
                        placeholder="Search For Products"
                        value={query}
                        onChange={(e) => onChangeHandler(e)}
                    />
                </div>
                <div className="SearchPageCloseButton">
                    <span className="closeButton" onClick={() => setShowSearchPage(false)}> Close<MdClose /></span>
                </div>

            </div>
            {data?.map((item) => (
                <div key={item.id} className="searchResultProduct">

                    <div className="productContainer">
                        <div className="searchProductImage">
                          <img src={item.imageUrl} />
                        </div>
                        <div className="searchProductDetails">
                            <div className="searchProductName">
                                {item.title.slice(0,30) + ("...")}
                                {data.length}
                            </div>
                            <div className="searchProductDescription">
                                {item.description.slice(0,70) + ("...")}
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    </div>;
};

export default Search;
