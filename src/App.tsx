import { BrowserRouter, Routes, Route } from "react-router-dom"
import ContainerBooks from "./components/ContainerBooks"
import ContainerFavsBooks from "./components/ContainerFavsBooks"
import ContainerCreateBooks from "./components/ContainerCreateBooks"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContainerBooks />} />
        <Route path="/favs" element={<ContainerFavsBooks />} />
        <Route path="/create" element={<ContainerCreateBooks />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App
