import { useState } from 'react'

import Navbar from './Components/Navbar'
import AmazonCart from './Components/AmazonCart'
import Card from './Components/Card'
import WishList from './Components/WishList'
import { Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
      <Navbar/>
      <Routes>
         <Route path='/' element={<WishList/>}/>
         <Route path='/cart' element={<AmazonCart/>}/>
      </Routes>
      
      
  </>
  )
}

export default App
