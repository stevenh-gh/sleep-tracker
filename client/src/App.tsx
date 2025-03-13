import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";

const App = () => (
  <Routes>
    <Route path={"/"} element={<Home/>}/>
    <Route path={"/about"} element={<About/>}/>
    <Route path={"/contact"} element={<Contact/>}/>
    <Route path={"/login"} element={<Login/>}/>
    <Route path={"/signup"} element={<Signup/>}/>
  </Routes>
);
export default App;