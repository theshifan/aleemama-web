// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aleemama from "./pages/Aleemama";
import OurStory from "./pages/OurStory";

// Placeholder components for demo
const Recipes = () => <div style={{ padding: "2rem" }}><h2>Recipes Page</h2></div>;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Nest everything inside the Layout element route */}
        <Route path="/" element={<Aleemama />}>
          
          {/* 2. Define your individual sub-pages here */}
          {/* <Route index element={<Home />} /> Renders at domain.com/ */}
          <Route path="our-story" element={<OurStory />} /> {/* Renders at domain.com/our-story */}
          <Route path="recipes" element={<Recipes />} /> {/* Renders at domain.com/recipes */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}