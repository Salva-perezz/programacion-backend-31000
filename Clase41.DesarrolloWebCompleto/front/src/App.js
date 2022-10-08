import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormNoticia from "./components/FormNoticia";
import Noticias from "./components/Noticias.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<FormNoticia />} />
          <Route path="/" element={<Noticias />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
