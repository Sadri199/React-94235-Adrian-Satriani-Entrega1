import { BrowserRouter, Routes, Route } from "react-router"
import NavBarContainer from "./components/NavBarContainer"
import ItemListContainer from "./components/ItemListContainer"
import "./App.css"

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBarContainer />
      <Routes>
        <Route path="/" element={<ItemListContainer text={"Ok so, nothing here right now but eventually here would appear the items. \n My idea is something like these:\nPart Type: Legs\nPart ID: ZLN-XA2/FF\nPrice: 45600C\n"}  />} />
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
