import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Product from './pages/Product'

const App = () => {
  return (
    <main className='overflow-hidden text-[#404040]'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/collection' element={<Collection />}/>
        <Route path='/product/:productId' element={<Product />}/>
      </Routes>
    </main>
  )
}

export default App