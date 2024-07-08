import { Navbar } from "./ecommerce-product-page-main/components/Navbar"
import { Product } from "./ecommerce-product-page-main/components/Product"
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  const [cartNumber, setCartNumber] = useState<number>(0)
  const [tog, setTog] = useState<boolean>(true)

  const handleAdd = () => {
    setCartNumber(count)
    setCount(0)
  }

  return (
    <div className="lg:p-10 flex-col flex lg:gap-20">
      <Navbar cartNumber={cartNumber} setTog={setTog} tog={tog}/>

      <Product cartNumber={cartNumber}
       handleAdd={handleAdd} 
       count={count} 
       setCount={setCount}
       tog={tog}
       />
    </div>
  )
}

export default App
