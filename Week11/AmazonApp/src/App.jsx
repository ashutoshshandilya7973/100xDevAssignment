import { useState } from 'react'

import Navbar from './Components/Navbar'
import AmazonCart from './Components/AmazonCart'
import Card from './Components/Card'
import WishList from './Components/WishList'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
      <Navbar/>
      <AmazonCart/>
      {/* <WishList/> */}
      {/* <Card/> */}
  </>
  )
}

export default App
