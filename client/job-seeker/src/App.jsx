import { Routes, Route } from "react-router-dom"
import { Register } from "./pages/Register"
import {Login} from "./pages/Login"
import { AddJob } from "./pages/JobForm"
function App() {

  return (
   <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/addJob" element={<AddJob/>}/>
   </Routes>
  )
}

export default App
