import "./App.css";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {

  const [inputValue, setInputValue] = useState('')

  return (
    <SearchBar value={inputValue} onInput={setInputValue} />
  )
}
