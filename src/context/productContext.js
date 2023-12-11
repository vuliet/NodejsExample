import { createContext, useState, useEffect } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

  const [product, setProduct] = useState(null)
  const [products, setProducts] = useState([])

  const [productsInSearch, setProductsInSearch] = useState([])

  useEffect(() => {
    fetchProduct()
  }, [])

  // Fetch product
  const fetchProduct = async () => {
    const response = await fetch('http://localhost:5000/api/products')
    const data = await response.json()
    setProducts(data)
  }

  // get product by id
  const getProductById = async (productId) => {
    const response = await fetch(`http://localhost:5000/api/products/${productId}`)
    const data = await response.json()
    setProduct(data)
  }

  // search product
  const searchProduct = async (keyword) => {
    const response = await fetch(`http://localhost:5000/api/products/search?key=${keyword}`, { method: 'POST'})
    const data = await response.json()
    setProductsInSearch(data)
  }

    // update product
    const updateProduct = async (id, item) => {
      const response = await fetch(`http://localhost:5000/api/products/${id}}`, { 
        method: 'PUT',
        body: JSON.stringify(item)
      })
      const data = await response.json()
      setProduct(data)
    }

  return (
    <ProductContext.Provider
      value={{
        product,
        products,
        productsInSearch,
        getProductById,
        searchProduct,
        updateProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext
