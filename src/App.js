import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { ProductProvider } from './context/productContext';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SearchPage from './pages/SearchPage';
import NotFound from './pages/NotFound';
function App() {
  return (
    <ProductProvider>
      <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/product/:id' element={<ProductDetailPage />} />
            <Route path='/product/search' element={<SearchPage />} />
            <Route path='/404' element={<NotFound />} />
            <Route path='*' element={<Navigate to="/404" />}/>
          </Routes>
      </Router>
    </ProductProvider>
  )
}

export default App;
