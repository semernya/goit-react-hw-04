import "./App.css";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchImages } from "../../articles-api";

export default function App() {

  const [inputValue, setInputValue] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = async (newQuery) => {
    try {
      const data = await fetchImages(newQuery);
      setImages(data);
      setInputValue(newQuery);
    } catch (error) {
      alert('Error!')
    }
  }

  return (
    <div>
      <SearchBar value={inputValue} onInput={handleSearch} />
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  )
}
