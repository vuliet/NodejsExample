import React, { useEffect, useContext } from "react"
import ProductContext from "../context/productContext"
import ProductItem from "../components/ProductItem"
const SearchPage = () => {
    const search = window.location.search
    const queryString = new URLSearchParams(search)
    const keyQuery = queryString.get('key')
    const { productsInSearch, searchProduct } = useContext(ProductContext)

    useEffect (() => {
        document.title = 'Search Page'
        searchProduct(keyQuery)
    }, [])

    return (
        <div className="container-search">
            <h3>Product for keyword: {keyQuery}</h3>
            {productsInSearch.length > 0 ? (
                productsInSearch.map((item) => (
                    <div key={item.id} className="warpper-productitem" onClick={() => window.location.href = `/product/${item.id}`}>
                        <ProductItem id={item.id} name={item.name} price={item.price} color={item.color} />
                    </div>
                 ))) 
                : <p className="not-hasitem">Not found product for your keyword</p>
            }
        </div>
    )
}

export default SearchPage