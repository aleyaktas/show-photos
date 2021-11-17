import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import { createContext, useState } from 'react';

export const Context = createContext();

function App() {
  const [category,setCategory] = useState("");
  const [mode, setMode] = useState(0);
  return (
   <Context.Provider
   value={{category, setCategory, mode, setMode}}>
      <Navbar/>
      <Home/>
  </Context.Provider>
  );
}

export default App;
