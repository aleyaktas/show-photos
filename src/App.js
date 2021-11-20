import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import data from './img/data';
import Images from './components/Images';
import { Container } from '@mui/material';

export const Context = createContext();

function App() {
  const [allData, setAllData] = useState(data)
  const [category,setCategory] = useState("");
  const [mode, setMode] = useState(1);
  const [chooseCol, setChooseCol] = useState(0);
  return (
   <Context.Provider
   value={{category, setCategory, mode, setMode, allData,chooseCol, setChooseCol}}>
      <BrowserRouter>
      <Container sx={{borderRight: 1, borderLeft:1 , borderColor: "black", padding:"0 !important"}}>
      <Navbar/>
      <Home/>
        <Routes>
          <Route path="/" element={<Images/>}/>
          <Route path="/:category" element={<Category/>}/>         
        </Routes>
        </Container>
      </BrowserRouter>
      </Context.Provider>
  );
}
export default App;
