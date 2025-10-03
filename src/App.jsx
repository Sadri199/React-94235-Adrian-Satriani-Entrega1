import { BrowserRouter, Routes, Route } from "react-router"
import { ToastContainer } from 'react-toastify'
import NavBarContainer from "./components/NavBarContainer"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import CartContainer from "./components/CartContainer"
import CheckoutContainer from "./components/CheckoutContainer"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <ToastContainer/>
      <NavBarContainer />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/brand/:id" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/checkout" element={<CheckoutContainer />} />
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
