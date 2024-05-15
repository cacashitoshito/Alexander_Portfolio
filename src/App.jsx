import Home from "./Routes/Home.jsx"
import Projects from "./Routes/Projects.jsx"
import About from "./Routes/About.jsx"
import Contact from "./Routes/Contact.jsx"
import { Routes, Route, BrowserRouter} from "react-router-dom"

const App = () => {
  return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path= "/Projects" element={<Projects/>} />
        <Route path= "/About" element={<About/>} />
        <Route path= "/Contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
  
}

export default App
