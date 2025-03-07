import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from '../screen/Login/Login';
// import ProductDeatil from '../screen/ProductDeatil/ProductDetail';
import ProductList from '../component/productList';



export default function Navigation() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/product' element={<ProductList />} />

    </Routes>
  )
}
