import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Aboutus from "./Components/Navbar/Aboutus";
import Destination from "./Components/Navbar/Destination";
import Tour from "./Components/Navbar/Tour";
import Vlog from "./Components/Navbar/Vlog";
import Book from "./Components/Navbar/Book";
import Content1 from "./Components/Content/Content1";
function App() {
  return (
    <>
    <div>
     <Home />
     <Content1/>
     </div>
     <div>
      <Routes>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path="/about" element={<Aboutus/>}></Route>
        <Route path="/destination" element={<Destination/>}></Route>
        <Route path="/tour" element={<Tour/>}></Route>
        <Route path="/vlog" element={<Vlog/>}></Route>
        <Route path="/book" element={<Book/>}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
