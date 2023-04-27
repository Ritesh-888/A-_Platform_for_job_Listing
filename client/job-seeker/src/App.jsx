import { Routes, Route } from "react-router-dom"
import { Register } from "./pages/Register"
import {Login} from "./pages/Login"
import { AddJob } from "./pages/JobForm"
import { Detail } from "./pages/Detail"
function App() {

  return (
   <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/addJob" element={<AddJob/>}/>
        <Route path="/detail" element={<Detail/>}/>
   </Routes>
  )
}

export default App
