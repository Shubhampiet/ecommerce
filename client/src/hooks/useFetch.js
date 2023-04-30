import { useEffect, useState } from "react"
import { fetchDataFromApi } from "../Utils/api"

const useFetch = (endpoint)=>{
    const [data,setData] = useState();
console.log("i am usefetch")

    useEffect(()=>{makeApiCall()
    }, [endpoint]);


const makeApiCall =async ()=>{
    const res= await fetchDataFromApi(endpoint);
    setData(res);
};

return {data};
}

export default useFetch;