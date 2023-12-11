import React from "react"
import { Link } from 'react-router-dom'
import CurrencyConvert from "../common/currencyHelper";
const ProductItem = (props) => {
    if (props === null || props === undefined) return
    const detailPath = `/product/${props.id}`
    const price = CurrencyConvert(props.price)
    return (   
         <div className="product-item">
             <h4 className="product-title">Name: {props.name}</h4>
             <h3>Color: {props.color}</h3>
             {price !== 0 && (
                 <span className="product-price">Price: <span>{price}</span></span>
             )}
             <Link className="btn-goto-detail" to={detailPath}>Go to detail</Link>
         </div>
    )
}

export default ProductItem