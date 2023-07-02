 
import './Styles.css';
// import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import Signup from "./routes/Signup";

export default function App(){

return(
  <div className="App">
    {/* <Home/>  */}
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/about" element={ <About/>}/>
      <Route path="/service" element={ <Service/>}/>
      <Route path="/contact" element={ <Contact/>}/>
      <Route path="/signup" element={ <Signup/>}/>
    </Routes>
    {/* <Navbar/> */}
   
  </div>
);
}
