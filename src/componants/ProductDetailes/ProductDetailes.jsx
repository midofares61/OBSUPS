import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detailes from "./Detailes";

function ProductDetailes(){
    const api_url="https://fakestoreapi.com/products";
    const [product, setProduct] = useState({});
    const params= useParams();
    console.log(params);
    useEffect(()=>{
        fetch(`${api_url}/${params.productId}`).then((res)=>res.json()).then((product)=>setProduct(product))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return(
        <>
        <Detailes product={product}/>
        </>
    )
}
export default ProductDetailes;