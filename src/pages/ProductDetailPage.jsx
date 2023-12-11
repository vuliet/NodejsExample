import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductContext from "../context/productContext"
import CurrencyConvert from "../common/currencyHelper"
const ProductDetailPage = () => {
    const { id } = useParams()
    const { product, getProductById, updateProduct } = useContext(ProductContext)
    useEffect(() => {
        document.title = 'Detail page ' + id
        getProductById(id)
        console.log('product page id: ', id)
    }, [])

    if (!product || product.length === 0 || product.status === 400) {
        return <p style={{ maxWidth: 1200, textAlign: 'center', margin: 'auto', padding: 10 }}>Product not exist</p>
    } else if (product.error === 1) {
        window.location.href = '/404'
    }

    const ediProductHandller = () => {
        // const newItem = {
        //     name: '',
        //     color:'',
        //     price: 0
        // }
        // updateProduct(id, newItem)
    }

    return (
        <div className="container-detail">
           <h3>This is detail page </h3>
           <div className="item">
               <h3 className="productId">ProductId: {product.id}</h3>
               <h3 className="name">{product.name}</h3>
               <h3 className="color">Color: {product.color}</h3>
               <span className="product-price">Price: <span>{CurrencyConvert(product.price)}</span></span>
           </div>

          {/* <div className="edit-form">
              <form className="frmEditProduct">
                  <div className="warrper-edit-name">
                        <label>Product name: </label>
                        <input type='text' value={product.name} />
                  </div>
                  <div className="warrper-edit-color">
                        <label>Color: {product.color} </label>
                        <input type='text' value={product.color} />
                  </div>
                  <div className="warpper-edit-price">
                        <label>Price: {product.price} </label>
                        <input type='text' value={product.price} />
                  </div>
              </form>
          </div> */}

           <button className="btn-upd" onClick={ediProductHandller}>Edit</button>
        </div>
    )
}

export default ProductDetailPage