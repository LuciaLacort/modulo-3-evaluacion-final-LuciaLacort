import "../styles/App.scss";

import Header from "./Header";
import Main from "./Main";
import  getDataApi from "../services/api";
import { useState, useEffect } from "react";


function App() {


  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataApi().then((newArray) => { setCharacters(newArray) })
  }, [])


  return (
    <>
     <Header/>
     <Main characters={characters}/>
    </>
  )
}
export default App
