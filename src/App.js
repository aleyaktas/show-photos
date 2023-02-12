import "./App.css";
import ModeItems from "./components/ModeItems";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import data from "./img/data";
import Images from "./components/Images";
import Navbar from "./components/Navbar";

export const Context = createContext();

function App() {
  const [allData, setAllData] = useState(data);
  const [category, setCategory] = useState("");
  const [mode, setMode] = useState(1);
  const [chooseCol, setChooseCol] = useState(0);
  return (
    <Context.Provider
      value={{
        category,
        setCategory,
        mode,
        setMode,
        allData,
        chooseCol,
        setChooseCol,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <ModeItems />
        <Routes>
          <Route path="/" element={<Images />} />
          <Route path="/:category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
export default App;
