import React, { useContext, useState, useEffect } from "react"
import { useRef } from "react"
import ProductItem from "../components/ProductItem"
import ProductContext from "../context/productContext"
const ProductPage = () => {
    const { products } = useContext(ProductContext)
    const [searchValue, setSearchValue] = useState('')
    const ipSearchRef = useRef('')
    useEffect(() => {
        document.title = 'Product Page'
        console.log('Product page')
    }, [])

    const onSubmitFormHandler = (e) => {
        e.preventDefault()
        if (ipSearchRef.current.value === undefined || ipSearchRef.current.value === '' || ipSearchRef.current.value === null) {
            return;
        }
        window.location.href = '/product/search?key=' + ipSearchRef.current.value
    }

    return (
        <div className="container-products">
            <h3>This is product page</h3>
            <div className="list-products">
            <h4>List feature product</h4>

            <div className="container-search">
                <form id="frmSearchProduct" className="frmSearchProduct" onSubmit={onSubmitFormHandler}>
                    <input 
                        ref={ipSearchRef}
                        className="ipSearchProduct" 
                        value={searchValue} 
                        onChange={(e) => setSearchValue(e.target.value)} 
                        placeholder="Search product here"
                    />
                    <button className="btnSearchProduct">Search</button>
                </form>
            </div>

            {products.length > 0 ? (
                products.map((item) => (
                    <div key={item.id} className="warpper-productitem" onClick={() => window.location.href = `/product/${item.id}`}>
                        <ProductItem id={item.id} name={item.name}  price={item.price} color={item.color} />
                    </div>
                 ))) 
                : <p className="not-hasitem">No has item</p>
            }
           </div>
        </div>
    )
}

export default ProductPage