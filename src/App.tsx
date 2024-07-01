import { useState } from "react"
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import { RatingPage } from "./interactive-rating-component-main/components/RatingPage"
import { ThankYou } from "./interactive-rating-component-main/components/ThankYou"

function App() {
  const [rate, setRate] = useState("0")

  return (
    <div className=" bg-Very-Dark-Blue flex items-center justify-center  min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RatingPage rate={rate} setRate={setRate}/>}/>
          <Route path="/ThankYou" element={<ThankYou rate={rate}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
